import React from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Link,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export default function SignIn({ setAuthView }) {
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
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        type="password"
                        variant="outlined"
                        placeholder="PASSWORD"
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