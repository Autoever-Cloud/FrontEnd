// 메인페이지
// 로고(이미지+글씨), 밑에 글씨
// 밑에 버튼 3개

import React from 'react';
import {
  Typography,
  Button,
  Container,
  Box,
} from '@mui/material';

import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  const mainButtonStyle = {
    bgcolor: '#554f65ff', // A muted purple color
    color: 'white',
    borderRadius: '16px',
    padding: '10px 25px',
    fontSize: '1rem',
    fontWeight: 'bold',
    '&:hover': {
      bgcolor: '#5A438A', // A slightly darker shade for hover
    },
    textTransform: 'none',
    boxShadow: '0px 3px 5px rgba(0,0,0,0.2)',
  };


  return (
      <Box sx={{ flexGrow: 1, backgroundColor: '#F8F7FA', minHeight: '100vh' }}>

        {/* 중앙 컨텐츠 */}
        <Container maxWidth="md">
          <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                mt: 15,
              }}
          >
            {/* 중앙 로고 부분을 이미지로 변경 */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <img
                  src="/LOGO.png" // public 폴더의 LOGO.png 경로
                  alt="SeatEver Logo"
                  style={{ width: 120, height: 120}} // 적절한 크기로 조정
              />
              <Typography
                  variant="h2"
                  component="h1"
                  sx={{ fontWeight: 'bold', ml: 1, color: '#333' }}
              >
                SeatEver
              </Typography>
            </Box>
            <Typography
                variant="h6"
                color="text.secondary"
                sx={{ fontWeight: 'bold', mb: 6 }}>
              Any Seat you like, Sit whenever, SeatEver
            </Typography>

            {/* 기능 버튼 */}
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>

              <Button
                  variant="contained"
                  startIcon={<EventAvailableIcon />}
                  sx={mainButtonStyle}
                  onClick={() => navigate("/reservationlist")}
              >
                예약 하러가기!!
              </Button>
              <Button
                  variant="contained"
                  startIcon={<CheckCircleOutlineIcon />}
                  sx={mainButtonStyle}
                  onClick={() => navigate("/mypage")}
              >
                나의 예약/웨이팅
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
  );
}

export default MainPage;