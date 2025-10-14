import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

/* 🔹 애니메이션 정의 */
const fadeInRight = keyframes`
    0% { opacity: 0; transform: translateX(50px); }
    100% { opacity: 1; transform: translateX(0); }
`;

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

/* 🔹 메인 컨테이너 */
const MainContainer = styled.div`
    background-color: #003c88;
    color: white;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
    width: 100%;
`;

/* 🔹 왼쪽 로고 */
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${fadeIn} 1.2s ease forwards;

    img {
        width: 80%;
        max-width: 550px;
        height: auto;
    }
`;

/* 🔹 오른쪽 */
const Right = styled.div`
    flex: 1;
    position: relative;
    animation: ${fadeInRight} 1.4s ease forwards;
    display: flex;
    justify-content: flex-start;
    align-items: center; /* ✅ 세로 중앙 정렬로 교체 */
    margin-top: -360px; /* ✅ 전체를 위로 끌어올림 */
`;

/* ✅ 뒷상자 */
const BackBox = styled.div`
    position: absolute;
    top: -50px; /* ✅ 위로 올림 */
    left: -20px; /* 왼쪽 약간 이동 */
    width: 85%;
    height: 230px;
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.25);
    transform: rotate(1.5deg);
    transform-origin: center;
    z-index: 1;
    animation: ${fadeIn} 1.2s ease forwards;
    animation-delay: 1s;
`;

/* ✅ 앞상자 (문구 들어가는 메인 카드) */
const FrontBox = styled.div`
    position: absolute;
    top: 30px;
    left: 90px;
    width: 420px; /* ✅ 줄바꿈이 일정하게 되도록 폭 고정 */
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 38px 45px;
    color: #f0f4ff;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.9;
    text-align: left; /* ✅ 왼쪽 정렬 */
    z-index: 2;
    box-shadow: 8px 8px 28px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    animation: ${fadeIn} 1.4s ease forwards;
    animation-delay: 1.3s;

    p {
        margin-bottom: 22px;
        word-break: keep-all; /* ✅ 단어 단위 줄바꿈 */
    }
    p:last-child {
        margin-bottom: 0;
    }
`;

/* 🔹 하단 로고 */
const Bottom = styled.div`
    position: absolute;
    bottom: 35px;
    width: 88%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
    opacity: 0;
    animation: ${fadeIn} 1s ease forwards;
    animation-delay: 3.5s;
`;

const Logos = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;

    img {
        height: 50px;
        filter: brightness(0) invert(1);
    }
    
    img[alt="고용노동부"] {
        height: 60px; /* 기존보다 20% 크게 */
    }
`;

const TeamText = styled.div`
    font-size: 16px;
    color: #bcdcff;
`;

function MainPage() {
    const bannerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => setVisible(entry.isIntersecting));
            },
            { threshold: 0.5 }
        );
        if (bannerRef.current) observer.observe(bannerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <MainContainer ref={bannerRef}>
            <Layout>
                {/* ✅ 왼쪽 이미지 */}
                <Left>
                    <img
                        src="/assets/mainpagelogo.png"
                        alt="I'm SOLOg – 데이터센터 지킴이"
                    />
                </Left>

                {/* ✅ 오른쪽: 두 상자 구성 (엇갈림) */}
                <Right>
                    <BackBox />
                    <FrontBox>
                        <p>
                            SOLOg는 Log 데이터를 활용해 <br />문제 해결(SOLVE)을 보조하는 <br />
                            통합 시각화, 알림 서비스입니다.
                        </p>
                        <p>
                            Kibana를 통한 로그 정보 모니터링, <br />
                            Grafana를 통한 매트릭 모니터링 <br /> 기능을 제공합니다.
                        </p>
                        <p>
                            사전 정의된 규칙에 따라 발생된 알림을 모아 확인하고 <br />
                            AI의 조언과 함께 문제 해결의 첫걸음을 시작하세요.
                        </p>
                    </FrontBox>
                </Right>
            </Layout>

            {/* ✅ 하단 */}
            <Bottom>
                <Logos>
                    <img src="/assets/logo_moel.png" alt="고용노동부" />
                    <img src="/assets/logo_autoever.png" alt="현대오토에버" />
                    <img src="/assets/logo_rapa.png" alt="RAPA" />
                </Logos>
                <TeamText>© Team j4s | 문의: autoeversolog@gmail.com</TeamText>
            </Bottom>
        </MainContainer>
    );
}

export default MainPage;
