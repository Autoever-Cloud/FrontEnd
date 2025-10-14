import React, { useState, useEffect } from 'react';
import './index.css'; 
import Chatbot from './chatbot'; 
import data from './notification';

export default function AiChat() {
    const [notifications, setNotifications] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [viewMode, setViewMode] = useState('notifications'); // 우측 패널의 뷰 모드 상태 관리 

    useEffect(() => { // notification.js의 data function에서 온 데이터를 state에 적용  
        setNotifications(data);
        if (data.length > 0) {
            setSelectedId(data[0].id);
        }
    }, []);

    const handleNotificationClick = (id) => {
        setSelectedId(id);
    };

    // AI 챗 버튼 클릭 시 뷰 모드를 토글
    const handleToggleView = () => {
        setViewMode(prevMode => prevMode === 'notifications' ? 'chat' : 'notifications');
    };
    
    const selectedNotification = notifications.find(n => n.id === selectedId);

    return (
        <div className="container">
            <div className="main-content">
                {/* selectedNotification이 있을 경우에만 내부 내용을 렌더링*/}
                {selectedNotification ? (
                    <>
                        <div className="content-section">
                            <h2>{selectedNotification.content.title}</h2>
                            <br></br>
                            <p><strong>발생 시각:</strong> {selectedNotification.content.alertTime}</p>
                            <h3>원본 로그:</h3>
                            <pre>{selectedNotification.content.log}</pre>
                            <h3>상세 정보:</h3>
                            <p>
                                {selectedNotification.content.details.split('\n').map((line, index) => (
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
                    <h4>알림을 선택해주세요.</h4>
                )}
            </div>

            {/* 우측 사이드바 영역 */}
            <div className={`sidebar-container ${viewMode === 'chat' ? 'chat-view-active' : ''}`}>
                <div className="sidebar-sliding-wrapper">
                    <div className="notification-sidebar">
                        {notifications.map((item) => (
                            <div
                                key={item.id}
                                className={`notification-item ${item.id === selectedId ? 'active' : ''}`}
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

                {/* 토글 버튼 */}
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