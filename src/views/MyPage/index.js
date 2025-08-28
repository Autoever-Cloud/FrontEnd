// 타이틀
// 이름+인사말
// 실시간 웨이팅 정보 -> 최소, 뒤로 미루기, 좌석 보기
// 예약 정보 (리스트) -> 취소, 수정
import React from 'react';
import WaitingInfo from "../../components/mypage/waitingInfo"
import BookingInfo from "../../components/mypage/bookingInfo"
import { Container, Box, Typography} from '@mui/material';

// 세션에 있어야 하는 친구들...
const user = {
    user_email: "meow@gmail.com",
    user_name: "야옹이"
}
const reservation = {
    is_waiting: false,
    restaurantName: "",
    seatNumber: 4,
    timestamp: 1756192680000, //waiting 전용
    time: "18:00", //time 전용
}

function MyPage() {

    return (
        <Box sx={{ width: '100%', backgroundColor: '#F8F7FA', py: 5, minHeight: '100vh' }}>
            <Container maxWidth="sm">
                {/* 페이지 제목 */}
                <Typography
                    variant="h2"
                    component="h1"
                    align="center"
                    sx={{ fontWeight: 'bold', mb: 4 }}
                >
                    My Page
                </Typography>

                {/* 환영 메시지 */}
                <Box sx={{ mb: 6, pl: 2 }}>
                    <Typography variant="h4" component="p" sx={{ fontWeight: 'bold' }}>
                        {user.user_name}님,
                    </Typography>
                    <Typography variant="h4" component="p" sx={{ fontWeight: 'bold' }}>
                        즐거운 식사 되세요 :D
                    </Typography>
                </Box>

                {/*현재 세션에 저장된 예약정보가 웨이팅인지 예약인지에 따라 컴포넌트 로딩*/}
                {reservation.is_waiting ? <WaitingInfo /> : <BookingInfo />}

            </Container>
        </Box>
    );
}

export default MyPage;