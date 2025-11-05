import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const datacenterUrl = process.env.REACT_APP_ARGOCD_DATACENTER_URL;
    const kafkaUrl = process.env.REACT_APP_ARGOCD_KAFKA_URL;
    const lmvUrl = process.env.REACT_APP_ARGOCD_LMV_URL;

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

    // 드롭다운 열기 / 닫기
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);

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
                {/* 왼쪽 로고 */}
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

                {/* 오른쪽 네비게이션  */}
                <Box
                    sx={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                        pr: 4,
                    }}
                >
                
                    <Button sx={naviButtonStyle} onClick={() => navigate("/kibana")}>
                        Kibana Dashboard
                    </Button>
                    <Button sx={naviButtonStyle} onClick={() => navigate("/grafana")}>
                        Grafana Dashboard
                    </Button>
                    <Button sx={naviButtonStyle} onClick={() => navigate("/ai")}>
                        Alert & AI
                    </Button>
                    <div>
                        <Button
                            sx={naviButtonStyle}
                            onMouseEnter={handleMenuOpen}
                            onClick={handleMenuOpen}
                        >
                            Argo CD
                        </Button>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                onMouseLeave: handleMenuClose,
                                sx: {
                                    backgroundColor: "white",
                                    borderRadius: "12px",
                                    boxShadow:
                                        "0px 4px 12px rgba(0, 0, 0, 0.15), 0px 2px 4px rgba(0, 0, 0, 0.1)",
                                    paddingY: 0.5,
                                    minWidth: 200,
                                },
                            }}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                        >
                            <MenuItem
                                sx={{
                                    fontWeight: 600,
                                    fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                                    fontSize: "15px",
                                    borderRadius: "8px",
                                    color: "#003366",
                                    mb: 0.5,
                                    "&:hover": {
                                        backgroundColor: "#e6f0ff",
                                        color: "#001f4d",
                                    },
                                }}
                                onClick={() => {
                                    window.open(datacenterUrl, "_blank", "noopener,noreferrer");
                                    handleMenuClose();
                                }}
                            >
                                Datacenter ArgoCD
                            </MenuItem>
                            <MenuItem
                                sx={{
                                    fontWeight: 600,
                                    fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                                    fontSize: "15px",
                                    borderRadius: "8px",
                                    color: "#003366",
                                    mb: 0.5,
                                    "&:hover": {
                                        backgroundColor: "#e6f0ff",
                                        color: "#001f4d",
                                    },
                                }}
                                onClick={() => {
                                    window.open(kafkaUrl, "_blank", "noopener,noreferrer");
                                    handleMenuClose();
                                }}
                            >
                                Kafka ArgoCD
                            </MenuItem>
                            <MenuItem
                                sx={{
                                    fontWeight: 600,
                                    fontFamily: "'Poppins', 'Noto Sans KR', sans-serif",
                                    fontSize: "15px",
                                    borderRadius: "8px",
                                    color: "#003366",
                                    "&:hover": {
                                        backgroundColor: "#e6f0ff",
                                        color: "#001f4d",
                                    },
                                }}
                                onClick={() => {
                                    window.open(lmvUrl, "_blank", "noopener,noreferrer");
                                    handleMenuClose();
                                }}
                            >
                                Monitoring ArgoCD
                            </MenuItem>
                        </Menu>
                    </div>

                </Box>
            </Toolbar>
        </AppBar>
    );
}
