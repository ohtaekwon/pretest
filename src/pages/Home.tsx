import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Home = () => {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
      <Box padding={3}>
        <Typography
          variant="h2"
          fontWeight="700"
          sx={{
            textAlign: "center",
          }}
        >
          사전과제 : 로그인 구현하기
        </Typography>
        <Typography
          variant="h4"
          fontWeight="500"
          sx={{ textAlign: "center", marginTop: "20px", lineHeight: 3 }}
        >
          📌과제 요구조건📌 <br />
        </Typography>
        <Typography
          variant="h5"
          fontWeight="300"
          sx={{ textAlign: "left", marginTop: "20px", lineHeight: 3 }}
        >
          ✅ 1. 최소 input 2개, button 1개로그인시 (ID, PW 입력 후) <br />
          ✅ 2. Local Storage(혹은 cookie) 로그인 정보 저장 (다시 접속했을시
          정보 유지) <br />✅ 3. 메인 페이지 이동
        </Typography>
      </Box>
    </Stack>
  );
};

export default Home;
