// Authentication.jsx
import React, { useState } from "react";
import SignUp from "../../components/login/SignUp";
import SignIn from "../../components/login/SignIn";
import { Box } from "@mui/material";

export default function Authentication() {
    const [authView, setAuthView] = useState(false);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "grid",
                placeItems: "center",     // 가로+세로 정중앙
                bgcolor: "#f9f5fb",
            }}
        >
            {authView ? (
                <SignUp setAuthView={setAuthView} />
            ) : (
                <SignIn setAuthView={setAuthView} />
            )}
        </Box>
    );
}
