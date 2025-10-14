import React, { useState, useEffect } from 'react';
import './index.css'; // CSS 파일 임포트
import Chatbot from './chatbot'; // 방금 만든 AiChat 컴포넌트 임포트
import data from './notification';

export default function AiChat() {
    const [notifications, setNotifications] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    // [추가] 현재 뷰 모드를 관리하는 상태 ('notifications' 또는 'chat')
    const [viewMode, setViewMode] = useState('notifications');

    useEffect(() => {
        setNotifications(data);
        if (data.length > 0) {
            setSelectedId(data[0].id);
        }
    }, []);

    const handleNotificationClick = (id) => {
        setSelectedId(id);
    };

    // [추가] AI 챗 버튼 클릭 시 뷰 모드를 토글하는 함수
    const handleToggleView = () => {
        setViewMode(prevMode => prevMode === 'notifications' ? 'chat' : 'notifications');
    };
    
    const selectedNotification = notifications.find(n => n.id === selectedId);

    return (
        <div className="container">
            {/* 왼쪽 콘텐츠 영역은 변경 없음 */}
            <div className="main-content">
                {/* selectedNotification이 있을 경우에만 내부 내용을 렌더링합니다. (데이터 로딩 전 오류 방지) */}
                {selectedNotification ? (
                    <>
                        <h1>{selectedNotification.content.title}</h1>
                        
                        <div className="content-section">
                            <p><strong>감지 시각:</strong> {selectedNotification.content.timestamp}</p>
                            <p><strong>발생 시각:</strong> {selectedNotification.content.alertTime}</p>
                        </div>

                        <div className="content-section">
                            <h3>원본 로그:</h3>
                            <pre>{selectedNotification.content.log}</pre>
                        </div>

                        <div className="content-section">
                            <h3>상세 정보:</h3>
                            {/* '\n' 문자를 <br> 태그로 바꿔주기 위해 split과 map을 사용합니다. */}
                            <p>
                                {selectedNotification.content.details.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>
                        </div>

                        <div className="content-section">
                            <h3>조치 가이드:</h3>
                            <ul>
                                {/* 가이드 배열을 map 함수로 순회하며 <li> 태그로 변환합니다. */}
                                {selectedNotification.content.guide.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                ) : (
                    // 선택된 알림이 없을 경우(초기 로딩 중 등) 표시될 메시지
                    <h1>알림을 선택해주세요.</h1>
                )}
            </div>

            {/* [수정됨] 오른쪽 사이드바 영역 */}
            {/* viewMode 상태에 따라 'chat-view-active' 클래스를 동적으로 추가 */}
            <div className={`sidebar-wrapper ${viewMode === 'chat' ? 'chat-view-active' : ''}`}>
                {/* 1. 알림 목록 영역 */}
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

                {/* 2. AI 챗 영역 */}
                <div className="ai-chat-container">
                    <Chatbot/>
                </div>

                {/* 3. AI 챗 토글 버튼 */}
                {/* 버튼 클릭 시 handleToggleView 함수 호출 */}
                <div className="sidebar-button" onClick={handleToggleView}>
                    {/* viewMode에 따라 화살표 모양 변경 */}
                    <span className="button-arrow">
                        {viewMode === 'notifications' ? '←' : '→'}
                    </span>
                    <span className="button-text">AI chat</span>
                </div>
            </div>
        </div>
    );
}