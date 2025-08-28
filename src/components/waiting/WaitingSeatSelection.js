import React, { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function WaitingSeatSelection() {
    const navigate = useNavigate();
    const { state: restaurant } = useLocation();
    const [selectedSeat, setSelectedSeat] = useState(null);

    // 좌석 데이터 (간소화된 평면도 예시)
    const seats = [
        { id: 1, x: 50, y: 50, w: 60, h: 60, type: "2인석" },
        { id: 2, x: 150, y: 50, w: 60, h: 60, type: "2인석" },
        { id: 3, x: 250, y: 50, w: 120, h: 60, type: "4인석" },
        { id: 4, x: 50, y: 150, w: 120, h: 60, type: "4인석" },
        { id: 5, x: 200, y: 150, w: 60, h: 60, type: "2인석" },
        { id: 6, x: 300, y: 150, w: 60, h: 60, type: "2인석" },
        // ... 필요에 맞게 좌표와 크기 추가
    ];

    const handleSeatClick = (seat) => {
        setSelectedSeat(seat);
    };

    const handleReserve = () => {
        if (!selectedSeat) return;
        alert(`${restaurant.name} - ${selectedSeat.id}번 (${selectedSeat.type}) 좌석 예약 완료!`);
        navigate("/mypage");
    };

    if (!restaurant) {
        return (
            <Box p={4}>
                <Typography>선택한 식당 정보가 없습니다.</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#f9f5fb",
                p: 4,
            }}
        >
            {/* Title */}
            <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                Waiting Page
            </Typography>

            {/* 선택한 식당 정보 */}
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

            {/* 좌석 평면도 */}
            <Box
                sx={{
                    position: "relative",
                    width: 600,
                    height: 400,
                    mx: "auto",
                    bgcolor: "#eaeaea",
                    border: "2px solid #ccc",
                }}
            >
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
                            border: seat.id === selectedSeat?.id ? "3px solid #5A4A66" : "1px solid #999",
                            bgcolor: seat.id === selectedSeat?.id ? "#e6e0f0" : "white",
                        }}
                        elevation={3}
                    >
                        {seat.id}
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
                        좌석 번호: {selectedSeat.id} ({selectedSeat.type})
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
