import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Link,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function SignIn({ setAuthView }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookies] = useCookies(["token"]);

    const handleSignIn = async () => {
        try {
            const response = await axios.post("http://localhost:8080/auth/login", {
                user_email: email,
                user_passwd: password,
            });

            // 성공 시 토큰 저장 (예시: response.data.token이 있다고 가정)
            const { token, exprTime, message } = response.data;
            const expires = new Date();
            // 쿠키 한시간 만료
            expires.setMilliseconds(expires.getMilliseconds() + (exprTime || 3600000));
            setCookies("token", token, {expires});
        } catch (err) {
            if (err.response && err.response.data) {
                window.alert(err.response.data.error || "로그인 실패");
            } else {
                window.alert("서버 오류가 발생했습니다.");
            }
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                bgcolor: "#f9f5fb",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Logo Section */}
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <RestaurantIcon sx={{ fontSize: 40, mr: 1 }} />
                    <Typography variant="h4" fontWeight="bold">
                        SeatEver
                    </Typography>
                </Box>

                {/* Subtitle */}
                <Typography variant="subtitle1" sx={{ mb: 4 }}>
                    Any Seat you like, Sit whenever, SeatEver
                </Typography>

                {/* Input Fields */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        bgcolor: "white",
                        p: 3,
                        borderRadius: 2,
                        boxShadow: 1,
                        width: 350,
                    }}
                >
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="EMAIL"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        variant="outlined"
                        placeholder="PASSWORD"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            bgcolor: "#5A4A66",
                            borderRadius: 3,
                            fontWeight: "bold",
                            py: 1.2,
                            mt: 1,
                        }}
                        onClick={handleSignIn}
                    >
                        SIGN IN
                    </Button>
                    <Link
                        component="button"
                        underline="hover"
                        onClick={() => setAuthView(true)}
                        sx={{ mt: 2, color: "#888", fontSize: 14 }}
                    >
                        sign up
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
