// 메인페이지
// 로고(이미지+글씨), 밑에 글씨
// 밑에 버튼 3개

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
} from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function MainPage() {
  // 기본 테마 색상을 활용하여 버튼 스타일 정의
  const mainButtonStyle = {
    bgcolor: '#6750A4', // A muted purple color
    color: 'white',
    borderRadius: '20px',
    padding: '10px 25px',
    fontSize: '1rem',
    fontWeight: 'bold',
    '&:hover': {
      bgcolor: '#5A438A', // A slightly darker shade for hover
    },
    textTransform: 'none', // Prevent uppercase transformation
    boxShadow: '0px 3px 5px rgba(0,0,0,0.2)',
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#F8F7FA', minHeight: '100vh' }}>
      {/* 상단 네비게이션 바 */}
      <AppBar
        position="static"
        elevation={1}
        sx={{ backgroundColor: 'white', color: 'black' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <RestaurantMenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              SeatEver
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <Typography sx={{ cursor: 'pointer', fontWeight: 'medium' }}>
              Waiting List
            </Typography>
            <Typography sx={{ cursor: 'pointer', fontWeight: 'medium' }}>
              Booking List
            </Typography>
            <Typography sx={{ cursor: 'pointer', fontWeight: 'medium' }}>
              My Page
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#E8E8E8',
                color: 'black',
                fontWeight: 'bold',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#DCDCDC' },
                textTransform: 'none',
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 중앙 컨텐츠 */}
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            mt: 15, // Margin-top for spacing
          }}
        >
          {/* 로고 및 슬로건 */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <RestaurantMenuIcon sx={{ fontSize: 60, color: '#333' }} />
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontWeight: 'bold', ml: 1, color: '#333' }}
            >
              SeatEver
            </Typography>
          </Box>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
            Any Seat you like, Sit whenever, SeatEver
          </Typography>

          {/* 기능 버튼 */}
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center' }}>
            <Button
              variant="contained"
              startIcon={<SwapHorizIcon />}
              sx={mainButtonStyle}
            >
              웨이팅 하러 가기!!
            </Button>
            <Button
              variant="contained"
              startIcon={<EventAvailableIcon />}
              sx={mainButtonStyle}
            >
              예약 하러가기!!
            </Button>
            <Button
              variant="contained"
              startIcon={<CheckCircleOutlineIcon />}
              sx={mainButtonStyle}
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