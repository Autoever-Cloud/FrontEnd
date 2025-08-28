// 타이틀
// 식당 정보
// 좌석 배치표 (선택 버튼)
// 좌석 정보
// 좌석 예약 버튼
// 예약 버튼 누르면 MyPage

import React, { useState } from "react";
import {
    Box,
    Button,
    Typography,
    Grid,
    Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WaitingSeatSelection() {
    const navigate = useNavigate();
    const [selectedSeat, setSelectedSeat] = useState(null);

    // 예시 좌석 데이터 (실제는 서버에서 받아옴)
    const seats = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        waiting: Math.floor(Math.random() * 10), // 임시 대기 인원
    }));

    const handleSeatClick = (seat) => {
        setSelectedSeat(seat);
    };

    const handleReserve = () => {
        if (!selectedSeat) return;
        // TODO: 예약 API 호출
        alert(`${selectedSeat.id}번 좌석에 줄서기 완료!`);
        navigate("/mypage"); // 예약 성공 후 MyPage로 이동
    };

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

            {/* 식당 정보 */}
            <Box textAlign="center" mb={4}>
                <Typography variant="h5" fontWeight="bold">
                    호성이 두마리 치킨
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    서울 금천구 가산디지털1로 <b>189</b>
                </Typography>
            </Box>

            {/* 좌석 선택 */}
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                좌석 선택
            </Typography>

            {/* 좌석 배치 (간소화된 Grid) */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
                {seats.map((seat) => (
                    <Grid item xs={3} key={seat.id}>
                        <Paper
                            onClick={() => handleSeatClick(seat)}
                            sx={{
                                height: 60,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                border: seat.id === selectedSeat?.id ? "3px solid #5A4A66" : "1px solid #ccc",
                                bgcolor: seat.id === selectedSeat?.id ? "#e6e0f0" : "white",
                            }}
                            elevation={3}
                        >
                            {seat.id}번
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* 좌석 정보 */}
            {selectedSeat && (
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" maxWidth={500} mx="auto" mt={2}>
                    <Typography variant="body1">
                        좌석 번호: {selectedSeat.id} <br />
                        내 앞으로: {selectedSeat.waiting}명
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
