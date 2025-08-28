import React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Paper,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const dummyRestaurants = [
  {
    id: 1,
    name: '호성이 두마리 치킨',
    phone: "010-1111-1111",
    location: '서울 금천구 가산디지털1로 189',
    is_w: true
  },
  {
    id: 2,
    name: '지원이네 흑돼지',
    phone: "010-5555-5555",
    location: '가산디지털로 105',
    is_w: true
  },
];

function WaitingListPage() {
  const navigate = useNavigate();

  const handleClickRestaurant = (resto) => {
    // 페이지 이동하면서 선택한 식당 정보를 state로 전달
    navigate("/waitingseat", { state: resto });
  };

  return (
      <Box sx={{ width: '100%', backgroundColor: '#F8F7FA', py: 5 }}>
        <Container maxWidth="md">
          {/* 페이지 제목 */}
          <Typography
              variant="h2"
              component="h1"
              align="center"
              sx={{ fontWeight: 'bold', mb: 4 }}
          >
            Waiting List
          </Typography>

          {/* 검색창 */}
          <TextField
              fullWidth
              variant="outlined"
              placeholder="식당을 검색해보세요!"
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                ),
                sx: {
                  borderRadius: '50px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  }
                },
              }}
              sx={{ mb: 6 }}
          />

          {/* 레스토랑 목록 */}
          <Box>
            {dummyRestaurants.map((resto, index) => (
                <React.Fragment key={resto.id}>
                  <Paper
                      elevation={0}
                      onClick={() => handleClickRestaurant(resto)} // ✅ 클릭 시 이동
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        backgroundColor: 'transparent',
                        cursor: "pointer",
                        "&:hover": { bgcolor: "#f1f1f1" }
                      }}
                  >
                    <img
                        src={`/${resto.name}.png`}
                        alt="가게 사진"
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 4,
                          objectFit: 'cover',
                          flexShrink: 0,
                        }}
                    />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        {resto.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ my: 0.5 }}>
                        Tel: {resto.phone}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {resto.location}
                      </Typography>
                    </Box>
                  </Paper>
                  {index < dummyRestaurants.length - 1 && <Divider sx={{ my: 1 }} />}
                </React.Fragment>
            ))}
          </Box>
        </Container>
      </Box>
  );
}

export default WaitingListPage;
