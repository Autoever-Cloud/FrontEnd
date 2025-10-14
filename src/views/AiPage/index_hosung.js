import React, { useState, useRef, useEffect } from "react";

// 스타일 객체는 그대로 유지합니다.
const styles = {
  pageContainer: {
    display: "flex",
    fontFamily: "sans-serif",
    height: "90vh",
    padding: "20px",
  },
  chatSection: {
    flex: 2,
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
  },
  logSection: {
    flex: 1,
    border: "1px solid #eee",
    borderRadius: "8px",
    padding: "20px",
    marginLeft: "20px",
    backgroundColor: "#f9f9f9",
  },
  chatWindow: {
    flexGrow: 1,
    overflowY: "auto",
    marginBottom: "20px",
  },
  message: {
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    maxWidth: "80%",
    wordWrap: "break-word",
  },
  userMessage: {
    backgroundColor: "#007bff",
    color: "white",
    alignSelf: "flex-end",
    marginLeft: "auto",
  },
  aiMessage: {
    backgroundColor: "#e9e9eb",
    color: "black",
    alignSelf: "flex-start",
  },
  form: {
    display: "flex",
  },
  input: {
    flexGrow: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    marginLeft: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
};

export default function AiPage_ho() {
  // --- 상태 관리 (State Management) ---
  const [userInput, setUserInput] = useState(""); // 변수명 일관성을 위해 setInput -> setUserInput으로 변경
  
  // ❗️ 가장 중요한 변/경: messages와 logs를 업데이트할 수 있도록 set 함수를 추가합니다.
  const [messages, setMessages] = useState([
    { text: "안녕하세요! 무엇을 도와드릴까요?", sender: "ai" },
  ]);
  // const [logs, setLogs] = useState([]); // setLogs도 추가 (필요 시 사용)
  const [isLoading, setIsLoading] = useState(false);

  const chatContainerRef = useRef(null);
  
  // --- 함수 (Functions) ---
  const handleSubmit = async (e) => {
    // ❗️ 1. 페이지 새로고침 방지
    e.preventDefault(); 
    
    // 입력값이 없으면 함수 종료
    if (!userInput.trim()) return;

    // ❗️ 2. 사용자의 메시지를 먼저 화면에 즉시 표시
    const userMessage = { text: userInput, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // ❗️ 3. API 요청 전에 입력창 비우기
    const currentInput = userInput;
    setUserInput("");
    
    // ❗️ 4. 로딩 상태 시작
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/solog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, 
        body: JSON.stringify({ prompt: currentInput }), 
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // ❗️ 5. API 응답(data)을 화면에 표시
      const data = await response.json(); 
      const aiMessage = { text: data.response, sender: "ai" };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);

    } catch (error) {
      console.error("API 호출 오류:", error);
      const errorMessage = { text: "죄송합니다, 답변 생성 중 오류가 발생했습니다.", sender: "ai" };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      // ❗️ 6. 로딩 상태 종료
      setIsLoading(false);
    }
  };

  // 채팅창 자동 스크롤 기능
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // --- UI 렌더링 (JSX) ---
  return (
    <div style={styles.pageContainer}>
      <div style={styles.chatSection}>
        <h1>AI Chat</h1>
        <div style={styles.chatWindow} ref={chatContainerRef}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                ...(msg.sender === "user"
                  ? styles.userMessage
                  : styles.aiMessage),
              }}
            >
              {msg.text}
            </div>
          ))}
          {isLoading && (
            <div style={{ ...styles.message, ...styles.aiMessage }}>
              답변을 생성 중입니다...
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)} // setInput -> setUserInput
            placeholder="AI에게 무엇이든 물어보세요..."
            style={styles.input}
            disabled={isLoading}
          />
          <button type="submit" style={styles.button} disabled={isLoading}>
            전송
          </button>
        </form>
      </div>

      {/* 시스템 로그 섹션은 그대로 유지 */}
      <div style={styles.logSection}>
        {/* ... */}
      </div>
    </div>
  );
}