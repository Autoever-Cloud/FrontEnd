import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import "./index.css";
import Chatbot from "./chatbot";

export default function AiChat() {
  const [notifications, setNotifications] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [viewMode, setViewMode] = useState("notifications");
  const [aiResponse, setAiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // 🔹 SSE 연결
  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/api/connect");

    eventSource.onopen = () => console.log("SSE connection established!");

    eventSource.addEventListener("log", (event) => {
      try {
        const newLogObject = JSON.parse(event.data);
        setNotifications((prev) => [newLogObject, ...prev]);
      } catch (error) {
        console.error("Failed to parse SSE data:", event.data, error);
      }
    });

    eventSource.onerror = (error) => console.error("SSE Error:", error);

    return () => {
      console.log("Closing SSE connection.");
      eventSource.close();
    };
  }, []);

  const selectedNotification = notifications.find((n) => n.id === selectedId);

  // 🔹 알림 클릭 시 백엔드로 log 전송
  const handleNotificationClick = async (id) => {
    if (isLoading) return; // 🔸 로딩 중이면 클릭 금지
    setSelectedId(id);
    setAiResponse(null);

    const target = notifications.find((n) => n.id === id);
    if (!target) return;

    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/solog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: JSON.stringify(target.content.log) }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      setAiResponse(data.response);
      console.log("AI 응답:", data.response);
    } catch (error) {
      console.error("AI 분석 요청 실패:", error);
      setAiResponse("로그 분석 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleView = () =>
      setViewMode((prev) => (prev === "notifications" ? "chat" : "notifications"));

  // 🔹 선택된 알림 콘솔 출력 (디버그용)
  useEffect(() => {
    if (selectedNotification) console.log("🟢 현재 선택된 알림:", selectedNotification);
  }, [selectedNotification]);

  return (
      <div className="container">
        {/* 🔹 왼쪽 메인 영역: AI 분석 결과만 표시 */}
        <div className="main-content">
          <div className="content-section">
            <h2>AI 로그 분석 결과</h2>

            {selectedNotification && (
                <>
                  <h3>📜 원본 로그</h3>
                  <pre>
                {JSON.stringify(selectedNotification.content.log, null, 2)}
              </pre>
                  <hr />
                </>
            )}

            <br />
            {isLoading ? (
                <div className="loading-spinner">🤖 로그 분석 중...</div>
            ) : aiResponse ? (
                <div className="ai-markdown">
                  <ReactMarkdown>{aiResponse}</ReactMarkdown>
                </div>
            ) : (
                <p>왼쪽 알림 중 하나를 선택하면 AI 분석 결과가 여기에 표시됩니다.</p>
            )}
          </div>
        </div>

        {/* 🔹 오른쪽 사이드바 */}
        <div className={`sidebar-container ${viewMode === "chat" ? "chat-view-active" : ""}`}>
          <div className="sidebar-sliding-wrapper">
            <div className="notification-sidebar">
              {notifications.length === 0 ? (
                  <p className="no-alert">아직 수신된 알림이 없습니다.</p>
              ) : (
                  notifications.map((item) => (
                      <div
                          key={item.id}
                          className={`notification-item ${item.id === selectedId ? "active" : ""}`}
                          onClick={() => handleNotificationClick(item.id)}
                          style={{
                            cursor:
                                isLoading && item.id !== selectedId
                                    ? "not-allowed"
                                    : "pointer",
                            opacity:
                                isLoading && item.id !== selectedId
                                    ? 0.5
                                    : 1,
                            pointerEvents:
                                isLoading && item.id !== selectedId
                                    ? "none"
                                    : "auto",
                          }}
                      >
                        <div className="notification-title">{item.notificationTitle}</div>
                        <div className="notification-time">{item.notificationTime}</div>
                      </div>
                  ))
              )}
            </div>

            {/* 기존 Chatbot 컴포넌트 */}
            <div className="ai-chat-container">
              <Chatbot />
            </div>
          </div>

          {/* 🔹 AI Chat 토글 버튼 */}
          <div className="sidebar-button" onClick={handleToggleView}>
            <div className="button-arrow-wrapper">
              <span className="button-arrow arrow-left">←</span>
              <span className="button-arrow arrow-right">→</span>
            </div>
            <span className="button-text">AI chat</span>
          </div>
        </div>
      </div>
  );
}

// 스타일 객체 (기존 그대로 유지)
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
