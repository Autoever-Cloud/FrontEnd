import React from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Link,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export default function SignUp({ setAuthView }) {
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

            <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: "#5A4A66" }}>
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
                    sx={{ mb: 2, bgcolor: "#fff" }}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="NAME"
                    sx={{ mb: 2, bgcolor: "#fff" }}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="PHONE NUMBER"
                    sx={{ mb: 2, bgcolor: "#fff" }}
                />
                <TextField
                    fullWidth
                    type="password"
                    variant="outlined"
                    placeholder="PASSWORD"
                    sx={{ mb: 2, bgcolor: "#fff" }}
                />
                <TextField
                    fullWidth
                    type="password"
                    variant="outlined"
                    placeholder="PASSWORD CHECK"
                    sx={{ mb: 2, bgcolor: "#fff" }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        bgcolor: "#5A4A66",
                        borderRadius: 3,
                        fontWeight: "bold",
                        py: 1.2,
                    }}
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
