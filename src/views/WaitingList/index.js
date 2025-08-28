// WaitingRestauantList 화면 불러옴

// Authentication.jsx
import React from "react";
import WaitingSeatSelection from "../../components/waiting/WaitingSeatSelection";
import { Box } from "@mui/material";

export default function WaitingList() {

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",     // 가로+세로 정중앙
                bgcolor: "#f9f5fb",
            }}
        >
            <WaitingSeatSelection/>
        </Box>
    );
}
