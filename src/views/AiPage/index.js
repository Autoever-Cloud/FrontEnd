import React, { useState, useEffect } from "react";
import "./index.css";
import Chatbot from "./chatbot";
// import data from "./notification"; // ❗️ 더 이상 정적 데이터를 사용하지 않으므로 주석 처리하거나 삭제합니다.

export default function AiChat() {
  const [notifications, setNotifications] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [viewMode, setViewMode] = useState("notifications");

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:8080/api/connect");

    eventSource.onopen = () => {
      console.log("SSE connection established!");
    };

    eventSource.addEventListener("log", (event) => {
      try {
        const newLogObject = JSON.parse(event.data);
        
        setNotifications((prevNotifications) => [newLogObject, ...prevNotifications]);
        
      } catch (error) {
        console.error("Failed to parse SSE data:", event.data, error);
      }
    });

    eventSource.onerror = (error) => {
      console.error("SSE Error:", error);
    };

    return () => {
      console.log("Closing SSE connection.");
      eventSource.close();
    };
  }, []); 


  useEffect(() => {
    if (notifications.length > 0 && selectedId === null) {
      setSelectedId(notifications[0].id);
    }
  }, [notifications]); 

  const handleNotificationClick = (id) => {
    setSelectedId(id);
  };

  const handleToggleView = () => {
    setViewMode((prevMode) => (prevMode === "notifications" ? "chat" : "notifications"));
  };

  const selectedNotification = notifications.find((n) => n.id === selectedId);

  return (
    <div className="container">
      <div className="main-content">
        {/* ❗️ 수정된 부분: 다시 selectedNotification.content. 를 추가했습니다. */}
        {selectedNotification ? (
          <>
            <div className="content-section">
              <h2>{selectedNotification.content.title}</h2>
              <br />
              <p>
                <strong>발생 시각:</strong> {selectedNotification.content.alertTime}
              </p>
              <h3>원본 로그:</h3>
              {/* ❗️ 중요: log가 객체이므로, JSON.stringify를 사용해 문자열로 변환해야 합니다. */}
              <pre>{JSON.stringify(selectedNotification.content.log, null, 2)}</pre>
              <h3>상세 정보:</h3>
              <p>
                {selectedNotification.content.details
                  .split("\n")
                  .map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </p>
              <h3>조치 가이드:</h3>
              <ul>
                {selectedNotification.content.guide.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <h4>알림을 기다리는 중이거나, 선택된 알림이 없습니다.</h4>
        )}
      </div>

      {/* --- 우측 사이드바 영역 (여기는 수정할 필요 없음) --- */}
      <div className={`sidebar-container ${viewMode === "chat" ? "chat-view-active" : ""}`}>
        {/* ... (이하 코드는 이전과 동일) ... */}
        <div className="sidebar-sliding-wrapper">
          <div className="notification-sidebar">
            {notifications.map((item) => (
              <div
                key={item.id}
                className={`notification-item ${item.id === selectedId ? "active" : ""}`}
                onClick={() => handleNotificationClick(item.id)}
              >
                <div className="notification-title">{item.notificationTitle}</div>
                <div className="notification-time">{item.notificationTime}</div>
              </div>
            ))}
          </div>
          <div className="ai-chat-container">
            <Chatbot />
          </div>
        </div>
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