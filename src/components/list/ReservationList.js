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
    Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// 백엔드 API 호출을 대체할 더미 데이터
const dummyRestaurants = [
    {
        name: '명지 찜닭',
        phone: "010-2222-2222",
        location: '가산디지털로 101',
        is_w: true
    },
    {
        name: '호성이 두마리 치킨',
        phone: "010-1111-1111",
        location: '가산디지털로 100',
        is_w: true
    },
    {
        name: '진주 냉면',
        phone: "010-3333-3333",
        location: '가산디지털로 103',
        is_w: true
    },
    {
        name: '지우카츠',
        phone: "010-4444-4444",
        location: '가산디지털로 104',
        is_w: true
    },
    {
        name: '지원이네 흑돼지',
        phone: "010-5555-5555",
        location: '가산디지털로 105',
        is_w: true
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
                    Reservation
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
                                <img
                                    src={`/${resto.name}.png`} // 이미지 파일 경로
                                    alt="가게 사진" // 이미지 설명을 위한 alt 속성
                                    style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 4,
                                        objectFit: 'cover', // 이미지가 지정된 영역에 맞게 잘리거나 늘어나도록 설정
                                        flexShrink: 0,
                                    }}
                                />
                                {/* 레스토랑 정보 */}
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