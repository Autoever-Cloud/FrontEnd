import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Link,
    InputAdornment,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";

export default function SignUp({ setAuthView }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const isMatch = passwordCheck.length > 0 && password === passwordCheck;

    const handleSignUp = async () => {
        if (!isMatch) {
            window.alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8080/auth/signup", {
                user_email: email,
                user_passwd: password,
                user_name: name,
                user_phonenumber: phone,
            });

            // 성공 시 팝업 띄우고 로그인 화면으로 이동
            window.alert(response.data.message || "회원가입이 완료되었습니다.");
            setAuthView(false);
        } catch (err) {
            if (err.response && err.response.data) {
                window.alert(err.response.data.error || "이미 존재하는 이메일입니다.");
            } else {
                window.alert("서버 오류가 발생했습니다.");
            }
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                bgcolor: "#f9f5fb",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <RestaurantIcon sx={{ fontSize: 40, mr: 1 }} />
                <Typography variant="h4" fontWeight="bold">
                    SeatEver
                </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Any Seat you like, Sit whenever, SeatEver
            </Typography>

            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ mb: 3, color: "#5A4A66" }}
            >
                회원 가입
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    bgcolor: "white",
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 1,
                    minWidth: 320,
                }}
            >
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 2, bgcolor: "#fff" }}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ mb: 2, bgcolor: "#fff" }}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="PHONE NUMBER"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    sx={{ mb: 2, bgcolor: "#fff" }}
                />
                <TextField
                    fullWidth
                    type="password"
                    variant="outlined"
                    placeholder="PASSWORD"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mb: 2, bgcolor: "#fff" }}
                />
                <TextField
                    fullWidth
                    type="password"
                    variant="outlined"
                    placeholder="PASSWORD CHECK"
                    value={passwordCheck}
                    onChange={(e) => setPasswordCheck(e.target.value)}
                    sx={{ mb: 2, bgcolor: "#fff" }}
                    InputProps={{
                        endAdornment:
                            passwordCheck.length > 0 ? (
                                isMatch ? (
                                    <InputAdornment position="end">
                                        <CheckCircleIcon color="success" />
                                    </InputAdornment>
                                ) : (
                                    <InputAdornment position="end">
                                        <CancelIcon color="error" />
                                    </InputAdornment>
                                )
                            ) : null,
                    }}
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
                    onClick={handleSignUp}
                >
                    SIGN UP
                </Button>

                <Link
                    component="button"
                    underline="hover"
                    onClick={() => setAuthView(false)}
                    sx={{ mt: 2, color: "#888", fontSize: 14 }}
                >
                    sign in
                </Link>
            </Box>
        </Box>
    );
}
