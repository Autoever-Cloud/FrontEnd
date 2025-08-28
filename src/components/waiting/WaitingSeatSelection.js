import React, { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function WaitingSeatSelection() {
    const navigate = useNavigate();
    const { state: restaurant } = useLocation();
    const [selectedSeat, setSelectedSeat] = useState(null);

    // 좌석 데이터 (도면 기반 예시)
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
    };

    const handleReserve = () => {
        if (!selectedSeat) return;
        alert(`${restaurant?.name} - ${selectedSeat.id}번 좌석(${selectedSeat.type}) 예약 완료!`);
        navigate("/mypage");
    };

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#f9f5fb", p: 4 }}>
            <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                Waiting Page
            </Typography>

            {/* 식당 정보 */}
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

            {/* 평면도 */}
            <Box
                sx={{
                    position: "relative",
                    width: 900,
                    height: 600,
                    mx: "auto",
                    bgcolor: "#f1f1f1",
                    border: "2px solid #333",
                }}
            >
                {/* 창가 자리 표시 */}
                <Box
                    sx={{
                        position: "absolute",
                        left: 0,
                        width: 40,          // 창가 폭
                        height: "100%",     // 맵 전체 높이
                        bgcolor: "#fef9e7", // 연한 노랑으로 표시
                        borderRight: "2px dashed #aaa", // 구분선
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        writingMode: "vertical-rl", // 세로 글씨
                        textOrientation: "upright",
                        fontWeight: "bold",
                        color: "#333",
                        fontSize: 16,
                    }}
                >
                    창가자리
                </Box>
                {/* 창고 */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 20,
                        left: 150,
                        width: 120,
                        height: 100,
                        bgcolor: "#e0e0e0",
                        border: "2px solid #555",
                    }}
                >
                    <Typography align="center" mt={4} fontWeight="bold">
                        창고
                    </Typography>
                </Box>

                {/* 주방 */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 20,
                        left: 280,
                        width: 400,
                        height: 100,
                        bgcolor: "#f8d7da",
                        border: "2px solid #555",
                    }}
                >
                    <Typography align="center" mt={4} fontWeight="bold">
                        주방
                    </Typography>
                </Box>

                {/* 화장실 */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        width: 120,
                        height: 100,
                        bgcolor: "#d1ecf1",
                        border: "2px solid #555",
                    }}
                >
                    <Typography align="center" mt={4} fontWeight="bold">
                        화장실
                    </Typography>
                </Box>

                {/* 냉장고 */}
                <Box
                    sx={{
                        position: "absolute",
                        top: 200,
                        right: 20,
                        width: 120,
                        height: 270,
                        bgcolor: "#cce5ff",
                        border: "2px solid #555",
                    }}
                >
                    <Typography align="center" mt={14} fontWeight="bold">
                        냉장고
                    </Typography>
                </Box>

                {/* 좌석 */}
                {seats.map((seat) => (
                    <Paper
                        key={seat.id}
                        onClick={() => handleSeatClick(seat)}
                        sx={{
                            position: "absolute",
                            top: seat.y,
                            left: seat.x,
                            width: seat.w,
                            height: seat.h,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            border:
                                seat.id === selectedSeat?.id
                                    ? "3px solid #5A4A66"
                                    : "1px solid #999",
                            bgcolor: seat.id === selectedSeat?.id ? "#e6e0f0" : "white",
                            fontWeight: "bold",
                            fontSize: 18,
                        }}
                        elevation={3}
                    >
                        {seat.capacity}
                    </Paper>
                ))}
            </Box>

            {/* 좌석 정보 & 예약 버튼 */}
            {selectedSeat && (
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    maxWidth={500}
                    mx="auto"
                    mt={4}
                >
                    <Typography variant="body1">
                        좌석 번호: {selectedSeat.id} ({selectedSeat.type}) <br />
                        정원: {selectedSeat.capacity}명
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#5A4A66",
                            borderRadius: 2,
                            px: 3,
                            py: 1,
                        }}
                        onClick={handleReserve}
                    >
                        이 좌석에 줄서기
                    </Button>
                </Box>
            )}
        </Box>
    );
}