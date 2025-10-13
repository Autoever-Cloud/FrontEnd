import React, { useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";

const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
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
    color: white;
    font-weight: bold;
`;

// ✅ 배너1 애니메이션: 활성 상태일 때만 실행
const Banner1 = styled(Section)`
    background-color: #ff6b6b;

    h1,
    p {
        opacity: 0;
        transform: translateY(20px);
    }

    ${({ isVisible }) =>
            isVisible &&
            css`
      h1 {
        animation: ${fadeInUp} 1s ease forwards;
        animation-delay: 0.2s;
      }

      p {
        animation: ${fadeInUp} 1s ease forwards;
        animation-delay: 1s;
        font-size: 24px;
        margin-top: 10px;
      }
    `}
`;

const Banner2 = styled(Section)`background-color: #4dabf7;`;
const Banner3 = styled(Section)`background-color: #51cf66;`;
const Banner4 = styled(Section)`background-color: #ffa94d;`;

function MainPage() {
    const banner1Ref = useRef(null);
    const [visible, setVisible] = React.useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // 배너1이 보이면 true, 안 보이면 false
                    if (entry.isIntersecting) {
                        setVisible(true);
                    } else {
                        setVisible(false);
                    }
                });
            },
            { threshold: 0.5 } // 화면에 절반 이상 보일 때 트리거
        );

        if (banner1Ref.current) {
            observer.observe(banner1Ref.current);
        }

        return () => {
            if (banner1Ref.current) {
                observer.unobserve(banner1Ref.current);
            }
        };
    }, []);

    return (
        <MainContainer>
            <Banner1 ref={banner1Ref} isVisible={visible}>
                <h1>배너1</h1>
                <p>이 문장은 순차적으로 나타납니다.</p>
            </Banner1>

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
