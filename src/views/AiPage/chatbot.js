// Chatbot.js

// ❗️ 수정 1: useState, useRef, useEffect를 react로부터 import 합니다.
import React, { useState, useRef, useEffect } from "react";

// 스타일 객체는 그대로 유지합니다.
const styles = {
  // ... (스타일 코드는 변경 없음)
  chatSection: { width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", boxSizing: "border-box", }, chatWindow: { flexGrow: 1, overflowY: "auto", marginBottom: "20px", }, message: { padding: "10px", borderRadius: "10px", marginBottom: "10px", maxWidth: "80%", wordWrap: "break-word", display: 'flex', flexDirection: 'column', }, userMessage: { backgroundColor: "#007bff", color: "white", alignSelf: "flex-end", marginLeft: "auto", }, aiMessage: { backgroundColor: "#e9e9eb", color: "black", alignSelf: "flex-start", }, form: { display: "flex", }, input: { flexGrow: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc", }, button: { padding: "10px 15px", marginLeft: "10px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "white", cursor: "pointer", },
};

export default function Chatbot() {
  // ❗️ 수정 2: useState Hook의 올바른 문법으로 수정합니다.
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "안녕하세요! 무엇을 도와드릴까요?", sender: "ai" },
  ]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태는 boolean (true/false)이 적합합니다.
  
  // ❗️ 수정 3: useRef Hook의 올바른 문법으로 수정합니다.
  const chatContainerRef = useRef(null);

  const handleSubmit = async (e) => {
    // ... (handleSubmit 함수 내부는 변경 없음)
    e.preventDefault(); if (!userInput.trim()) return; const userMessage = { text: userInput, sender: "user" }; setMessages((prevMessages) => [...prevMessages, userMessage]); const currentInput = userInput; setUserInput(""); setIsLoading(true); try { await new Promise(resolve => setTimeout(resolve, 1500)); const data = { response: `'${currentInput}'에 대한 답변입니다.` }; const aiMessage = { text: data.response, sender: "ai" }; setMessages((prevMessages) => [...prevMessages, aiMessage]); } catch (error) { console.error("API 호출 오류:", error); const errorMessage = { text: "죄송합니다, 답변 생성 중 오류가 발생했습니다.", sender: "ai" }; setMessages((prevMessages) => [...prevMessages, errorMessage]); } finally { setIsLoading(false); }
  };

  // ❗️ 수정 4: 즉시실행함수(IIFE)를 useEffect Hook으로 변경합니다.
  // 이 Hook은 messages나 isLoading 상태가 변할 때마다 채팅창 스크롤을 맨 아래로 내려줍니다.
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    // ... (return 하는 JSX 코드는 변경 없음)
    <div style={styles.chatSection}>
      <div style={styles.chatWindow} ref={chatContainerRef}>
        {messages.map((msg, index) => ( <div key={index} style={{ ...styles.message, ...(msg.sender === "user" ? styles.userMessage : styles.aiMessage), }} > {msg.text} </div> ))} {isLoading && ( <div style={{ ...styles.message, ...styles.aiMessage }}> 답변을 생성 중입니다... </div> )} </div> <form onSubmit={handleSubmit} style={styles.form}> <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="AI에게 무엇이든 물어보세요..." style={styles.input} disabled={isLoading} /> <button type="submit" style={styles.button} disabled={isLoading}> 전송 </button> </form> </div>
  );
}