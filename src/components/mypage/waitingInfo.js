import React from "react";
import { Container, Box, Typography, Paper, Stack, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const reservation = {
    is_waiting: false,
    restaurantName: "명지 찜닭",
    seatNumber: 13,
    timestamp: 1234, //waiting 전용
    time: "18:00", //time 전용
}
export default function WaitingInfo(){
    const navigate = useNavigate();
    const actionButtonStyle= {
        bgcolor: '#554f65ff', // A muted purple color
        color: 'white',
        borderRadius: '16px',
        padding: '10px 25px',
        fontSize: '1rem',
        fontWeight: 'bold',
        '&:hover': {
            bgcolor: '#5A438A', // A slightly darker shade for hover
        },
        textTransform: 'none',
        boxShadow: '0px 3px 5px rgba(0,0,0,0.2)',
    };

    return (
        <> {/* 여러 요소를 반환하기 위해 Fragment(<>)로 감싸줍니다. */}
            {/* 나의 웨이팅 섹션 */}
            <Box sx={{ pl: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    나의 예약
                </Typography>
            </Box>

            {/* 예약 정보 카드 */}
            {reservation ? (
                <Paper
                    elevation={3}
                    sx={{
                        p: 3,
                        borderRadius: '20px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {/* 왼쪽: 웨이팅 상세 정보 */}
                    <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            {reservation.restaurantName}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                            좌석번호: {reservation.seatNumber}번
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            예약 시간
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline' }}>
                            <Typography variant="h1" component="span" sx={{ ml: 1, fontWeight: 'medium' }}>
                                {reservation.time}
                            </Typography>
                        </Box>
                    </Box>

                    {/* 오른쪽: 액션 버튼 */}
                    <Stack spacing={1.5} sx={{ flexShrink: 0, ml: 3 }}>
                        <Button variant="contained" sx={actionButtonStyle}>
                            취소하기
                        </Button>
                        <Button variant="contained" sx={actionButtonStyle}>
                            수정하기
                        </Button>
                        <Button variant="contained" sx={actionButtonStyle}>
                            좌석 보기
                        </Button>
                    </Stack>
                </Paper>
            ) : (
                // 웨이팅 정보가 없을 때 보여줄 메시지
                <Paper
                    variant="outlined"
                    sx={{
                        p: 3,
                        borderRadius: '20px',
                        textAlign: 'center',
                        borderColor: 'rgba(0,0,0,0.12)',
                    }}
                >
                    <Typography color="text.secondary">
                        현재 웨이팅 정보가 없습니다.
                    </Typography>
                </Paper>
            )}
            {/* 수정 2: 맨 마지막에 있던 불필요한 ')' 삭제 */}
        </>
    );

}