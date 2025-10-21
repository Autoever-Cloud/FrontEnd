import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
    const navigate = useNavigate();
    const argocd_url = `${process.env.REACT_APP_ARGOCD_URL}/`

    const naviButtonStyle = {
        bgcolor: "white",
        color: "#003366",
        fontFamily: "'Poppins', 'Noto Sans KR', 'Arial Black', sans-serif",
        fontWeight: 800,
        fontSize: "17px",
        letterSpacing: "0.7px",
        boxShadow: "none",
        "&:hover": {
            bgcolor: "#e6f0ff",
            color: "#002244",
        },
        textTransform: "none",
    };

    return (
        <AppBar
            position="fixed"
            elevation={1}
            sx={{
                backgroundColor: "white",
                color: "#003366",
                borderBottom: "1px solid #e0e0e0",
            }}
        >
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    px: 8,
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                        onClick={() => navigate("/")}
                    >
                        <img
                            src="/assets/main_logo.png"
                            alt="Solog Logo"
                            style={{ width: 110, height: 60 }}
                        />
                    </IconButton>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                        pr: 4,
                    }}
                >
                    <Button
                        sx={naviButtonStyle}
                        onClick={() => window.open(argocd_url, "_blank")}
                    >
                        Argo CD
                    </Button>
                    <Button sx={naviButtonStyle} onClick={() => navigate("/kibana")}>
                        Kibana Dashboard
                    </Button>
                    <Button sx={naviButtonStyle} onClick={() => navigate("/grafana")}>
                        Grafana Dashboard
                    </Button>
                    <Button sx={naviButtonStyle} onClick={() => navigate("/ai")}>
                        Alert & AI
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
