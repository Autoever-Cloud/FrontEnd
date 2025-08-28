// 타이틀
// 식당 검색창
// 식당 리스트
// 식당 선택 (클릭 가능)

import React from 'react';
import {
    Container,
    Box,
    Typography,
    TextField,
    InputAdornment,
    Paper,
    Rating,
    IconButton,
    Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// 백엔드 API 호출을 대체할 더미 데이터
const dummyRestaurants = [
    {
        id: 1,
        name: '호성이 두마리 치킨',
        category: 'Category',
        price: '$$',
        distance: 1.2,
        rating: 5,
        description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    },
    {
        id: 2,
        name: '지원이네 흑돼지',
        category: 'Category',
        price: '$$',
        distance: 1.2,
        rating: 4.5,
        description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    },
    {
        id: 3,
        name: 'MUI 파스타 전문점',
        category: 'Category',
        price: '$$$',
        distance: 2.5,
        rating: 4,
        description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.',
    },
];

function WaitingListPage() {
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
                            borderRadius: '50px', // 둥근 모서리
                            backgroundColor: '#FFFFFF',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none', // 테두리 제거
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
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    p: 2,
                                    backgroundColor: 'transparent', // Paper 배경을 투명하게
                                }}
                            >
                                {/* 이미지 Placeholder */}
                                <Box
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 4,
                                        backgroundColor: '#6750A4',
                                        flexShrink: 0,
                                    }}
                                />
                                {/* 레스토랑 정보 */}
                                <Box sx={{ flexGrow: 1 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                        {resto.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ my: 0.5 }}>
                                        {resto.category} • {resto.price} • {resto.distance} miles away
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {resto.description}
                                    </Typography>
                                </Box>
                                {/* 별점 및 좋아요 */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Rating name="read-only" value={resto.rating} precision={0.5} readOnly />
                                    <IconButton>
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                </Box>
                            </Paper>
                            {/* 마지막 아이템이 아닐 경우에만 구분선 추가 */}
                            {index < dummyRestaurants.length - 1 && <Divider sx={{ my: 1 }} />}
                        </React.Fragment>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

export default WaitingListPage;