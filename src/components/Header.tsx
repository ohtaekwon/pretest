import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { AuthContext } from "context/AuthContext";

const Header = ({ auth }: { auth: boolean }) => {
  const { userInfo, logOut } = React.useContext(AuthContext);

  return (
    <Box
      sx={{
        zIndex: 2,
        width: "100%",
        height: 60,
        bgcolor: `${auth ? "#690fe0" : "#fff"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          paddingX: 2,
          maxWidth: "md",
        }}
      >
        <Typography
          variant="h6"
          fontWeight="700"
          color={`${auth ? "#fff" : "#000"}`}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {auth
            ? `${(userInfo as any).displayName!} 님 환영합니다.`
            : "사전과제"}
        </Typography>
      </Box>
      <>
        {auth && (
          <Button
            sx={{
              color: "#fff",
              position: "absolute",
              top: 10,
              right: "1rem",
            }}
            onClick={logOut}
          >
            로그아웃
          </Button>
        )}
      </>
    </Box>
  );
};

export default Header;
