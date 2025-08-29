// 타이틀
// 식당 정보
// 좌석 배치표 (선택 버튼)
// 좌석 선택하면 시간 선택할 수있게 좌석마다 빈자리 업데이트(이선좌는 클릭 안되게)
// 좌석 정보 (좌석 정보 실시간 최신화)
// 좌석 예약 버튼

import React, { useState } from "react";
import { Box, Grid, Button, Typography, Paper } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

// 렌더링할 전체 시간 목록
const allTimeSlots = [
  '11:00', '12:00', '13:00',
  '14:00', '17:00', '18:00',
  '19:00', '20:00', '21:00', '22:00'
];
// 백엔드 API로부터 받아왔다고 가정한, 이미 예약된 시간 목록 (더미 데이터)
const bookedTimes = ['11:00', '17:00', '19:00'];

export default function WaitingSeatSelection() {
    const navigate = useNavigate();
    const { state: restaurant } = useLocation();
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null); // 1. 선택된 시간을 저장할 state

    // 좌석 데이터 (기존과 동일)
    const seats = [
        { id: 1, x: 40, y: 60, w: 60, h: 120, type: "8인석", capacity: 8 },
        { id: 2, x: 40, y: 200, w: 60, h: 100, type: "6인석", capacity: 6 },
        { id: 3, x: 40, y: 320, w: 60, h: 80, type: "4인석", capacity: 4 },
        { id: 4, x: 40, y: 420, w: 60, h: 80, type: "4인석", capacity: 4 },
        { id: 5, x: 160, y: 220, w: 60, h: 60, type: "2인석", capacity: 2 },
        { id: 6, x: 240, y: 220, w: 60, h: 60, type: "2인석", capacity: 2 },
        { id: 7, x: 190, y: 340, w: 80, h: 80, type: "4인석", capacity: 4 },
        { id: 8, x: 350, y: 200, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 9, x: 440, y: 200, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 10, x: 530, y: 200, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 11, x: 620, y: 200, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 12, x: 350, y: 300, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 13, x: 440, y: 300, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 14, x: 530, y: 300, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 15, x: 620, y: 300, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 16, x: 350, y: 400, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 17, x: 440, y: 400, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 18, x: 530, y: 400, w: 70, h: 70, type: "4인석", capacity: 4 },
        { id: 19, x: 620, y: 400, w: 70, h: 70, type: "4인석", capacity: 4 },
    ];

    const handleSeatClick = (seat) => {
        setSelectedSeat(seat);
        setSelectedTime(null); // 다른 좌석을 선택하면 선택된 시간을 초기화
    };

    // 2. 시간 버튼 클릭 시 호출될 핸들러
    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    const handleReserve = () => {
        // 3. 좌석과 시간이 모두 선택되었는지 확인
        if (!selectedSeat || !selectedTime) {
            alert("좌석과 시간을 모두 선택해주세요.");
            return;
        }
        // 4. alert 메시지에 선택된 시간 정보 추가
        alert(`${restaurant?.name} - ${selectedSeat.id}번 좌석(${selectedSeat.type}) ${selectedTime} 예약 완료!`);
        navigate("/mypage");
    };

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#f9f5fb", p: 4 }}>
            <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                Reservation Page
            </Typography>

            {/* 식당 정보 (기존과 동일) */}
            {restaurant && (
                <Box textAlign="center" mb={4}>
                    <Typography variant="h5" fontWeight="bold">
                        {restaurant.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {restaurant.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Tel: {restaurant.phone}
                    </Typography>
                </Box>
            )}

            {/* 평면도 (기존과 동일) */}
            <Box
                sx={{
                    position: "relative", width: 900, height: 600, mx: "auto",
                    bgcolor: "#f1f1f1", border: "2px solid #333",
                }}
            >
                {/* ... 창가, 창고, 주방 등 내부 구조물 렌더링 ... */}
                <Box sx={{ position: "absolute", left: 0, width: 40, height: "100%", bgcolor: "#fef9e7", borderRight: "2px dashed #aaa", display: "flex", justifyContent: "center", alignItems: "center", writingMode: "vertical-rl", textOrientation: "upright", fontWeight: "bold", color: "#333", fontSize: 16, }}> 창가자리 </Box>
                <Box sx={{ position: "absolute", top: 20, left: 150, width: 120, height: 100, bgcolor: "#e0e0e0", border: "2px solid #555", }}> <Typography align="center" mt={4} fontWeight="bold"> 창고 </Typography> </Box>
                <Box sx={{ position: "absolute", top: 20, left: 280, width: 400, height: 100, bgcolor: "#f8d7da", border: "2px solid #555", }}> <Typography align="center" mt={4} fontWeight="bold"> 주방 </Typography> </Box>
                <Box sx={{ position: "absolute", top: 20, right: 20, width: 120, height: 100, bgcolor: "#d1ecf1", border: "2px solid #555", }}> <Typography align="center" mt={4} fontWeight="bold"> 화장실 </Typography> </Box>
                <Box sx={{ position: "absolute", top: 200, right: 20, width: 120, height: 270, bgcolor: "#cce5ff", border: "2px solid #555", }}> <Typography align="center" mt={14} fontWeight="bold"> 냉장고 </Typography> </Box>

                {seats.map((seat) => (
                    <Paper
                        key={seat.id}
                        onClick={() => handleSeatClick(seat)}
                        sx={{
                            position: "absolute", top: seat.y, left: seat.x, width: seat.w, height: seat.h,
                            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                            border: seat.id === selectedSeat?.id ? "3px solid #5A4A66" : "1px solid #999",
                            bgcolor: seat.id === selectedSeat?.id ? "#e6e0f0" : "white",
                            fontWeight: "bold", fontSize: 18,
                        }}
                        elevation={3}
                    >
                        {seat.capacity}
                    </Paper>
                ))}
            </Box>

            {/* 좌석 선택 시 시간 선택 UI 및 예약 버튼 표시 */}
            {selectedSeat && (
                <>
                    {/* 시간 선택 컴포넌트 */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, mt: 2 }}>
                        <Grid container spacing={2} sx={{ maxWidth: '600px' }}>
                            {allTimeSlots.map((time) => {
                                const isBooked = bookedTimes.includes(time);
                                return (
                                    <Grid item xs={3} key={time}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            disabled={isBooked}
                                            // 5. 선택된 시간인지 확인하여 스타일 변경
                                            sx={{
                                                borderRadius: '12px',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                                                padding: '12px 0',
                                                fontSize: '1.1rem',
                                                fontWeight: 'bold',
                                                // 선택된 버튼은 다른 색상으로 표시
                                                backgroundColor: selectedTime === time ? '#5A4A66' : '#ffffff',
                                                color: selectedTime === time ? '#ffffff' : '#333333',
                                                '&:hover': {
                                                    backgroundColor: selectedTime === time ? '#493D55' : '#f5f5f5',
                                                },
                                                '&.Mui-disabled': {
                                                    backgroundColor: '#e0e0e0',
                                                    color: '#a0a0a0',
                                                },
                                            }}
                                            onClick={() => handleTimeClick(time)}
                                        >
                                            {time}
                                        </Button>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>

                    {/* 좌석 정보 & 예약 버튼 */}
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                        maxWidth={500}
                        mx="auto"
                        mt={2}
                    >
                        <Typography variant="body1" fontWeight="bold">
                            좌석 번호: {selectedSeat.id} ({selectedSeat.type}) <br />
                            {/* 6. 선택된 시간 표시 */}
                            예약 시간: {selectedTime ? selectedTime : '시간을 선택해주세요.'}
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#5A4A66",
                                borderRadius: 2, px: 3, py: 1,
                            }}
                            onClick={handleReserve}
                            // 7. 좌석과 시간이 모두 선택되어야 버튼 활성화
                            disabled={!selectedTime}
                        >
                            이 좌석에 예약하기
                        </Button>
                    </Box>
                </>
            )}
        </Box>
    );
}