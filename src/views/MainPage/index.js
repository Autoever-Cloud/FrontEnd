import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// 🔹 기본 페이드인 애니메이션
const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(30px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

// 🔹 왼쪽 텍스트 슬라이드 인
const fadeInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

// 🔹 오른쪽 텍스트 슬라이드 인
const fadeInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`;

// 🔹 아래쪽 로고 영역 페이드 인
const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;

const MainContainer = styled.div`
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
`;

const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    font-size: 48px;
    font-weight: bold;
    color: white;
`;

/* =======================================================
   ✅ 배너1 : SOLOg – 데이터센터 지킴이
   ======================================================= */
const Banner1 = styled(Section)`
  background-color: #003c88;
  color: white;
  position: relative;
  padding: 0 8%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  .left {
    flex: 1;
    animation: ${fadeInLeft} 1.2s ease forwards;
  }

  .right {
    flex: 1;
    animation: ${fadeInRight} 1.4s ease forwards;
  }

  .title {
    font-size: 100px;
    font-weight: 900;
    color: #ffffff;
    text-shadow: 6px 6px 0px rgba(0, 0, 0, 0.3),
                 3px 3px 0px #2b60c5; /* 흰 글자 그림자 + 파란 하이라이트 */
    margin: 0;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 0.6s;
  }

  .subtitle {
    font-size: 32px;
    font-weight: 700;
    margin-top: 10px;
    color: #ffffff;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 1.4s;
  }

  .im {
    font-size: 36px;
    font-weight: 700;
    color: #bcdcff;
    margin-bottom: 10px;
    animation: ${fadeInUp} 1s ease forwards;
    animation-delay: 0.2s;
  }

  .desc {
    font-size: 20px;
    line-height: 1.8;
    color: #f0f0f0;
    opacity: 0;
    animation: ${fadeInUp} 1s ease forwards;
    ${({ delay }) =>
    delay &&
    css`
        animation-delay: ${delay}s;
      `}
  }

  .bottom {
    position: absolute;
    bottom: 70px;
    width: 85%;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8%;
    opacity: 0;
    animation: ${fadeIn} 1s ease forwards;
    animation-delay: 3.5s;
  }

  .logos {
    display: flex;
    align-items: center;
    gap: 60px;

    img {
      height: 48px;
      filter: brightness(0) invert(1); /* 흰색 느낌 */
    }
  }

  .team {
    font-size: 16px;
    color: #bcdcff;
  }
`;

const Banner2 = styled(Section)`background-color: #4dabf7;`;
const Banner3 = styled(Section)`background-color: #51cf66;`;
const Banner4 = styled(Section)`background-color: #ffa94d;`;

function MainPage() {
    const banner1Ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => setVisible(entry.isIntersecting));
            },
            { threshold: 0.5 }
        );

        if (banner1Ref.current) observer.observe(banner1Ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <MainContainer>
            <Banner1 ref={banner1Ref} isVisible={visible}>
                {/* ✅ 왼쪽 영역 */}
                <div className="left">
                    <div className="im">I'm</div>
                    <h1 className="title">SOLOg</h1>
                    <h2 className="subtitle">– 데이터센터 지킴이</h2>
                </div>

                {/* ✅ 오른쪽 설명 */}
                <div className="right">
                    <p className="desc" style={{ animationDelay: "1.8s" }}>
                        SOLOg는 Log 데이터를 활용해 문제 해결(SOLVE)을 보조하는 통합 시각화, 알림 서비스입니다.
                    </p>
                    <p className="desc" style={{ animationDelay: "2.3s" }}>
                        Kibana를 통한 로그 정보 모니터링, Grafana를 통한 매트릭 모니터링 기능을 제공합니다.
                    </p>
                    <p className="desc" style={{ animationDelay: "2.8s" }}>
                        사전 정의된 규칙에 따라 발생된 알림을 모아 확인하고 AI의 조언과 함께 문제 해결의 첫걸음을 시작하세요.
                    </p>
                </div>

                {/* ✅ 하단 로고 + 문의 */}
                <div className="bottom">
                    <div className="logos">
                        <img src="/assets/logo_moel.png" alt="고용노동부" />
                        <img src="/assets/logo_autoever.png" alt="현대오토에버" />
                        <img src="/assets/logo_rapa.png" alt="RAPA" />
                    </div>
                    <div className="team">© Team j4s | 문의: autoeversolog@gmail.com</div>
                </div>
            </Banner1>

            {/* 나머지 배너 그대로 */}
            <Banner2>
                <h1>배너2</h1>
            </Banner2>
            <Banner3>
                <h1>배너3</h1>
            </Banner3>
            <Banner4>
                <h1>배너4</h1>
            </Banner4>
        </MainContainer>
    );
}

export default MainPage;
