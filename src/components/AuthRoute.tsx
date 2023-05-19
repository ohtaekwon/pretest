import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "./Header";

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const checkUser = () => {
      const user = localStorage.getItem("pretest");
      if (!user || user === "undefined") {
        return navigate("/signin");
      }
      return navigate("/");
    };
    checkUser();
  }, [navigate]);

  return (
    <>
      <Header auth={false} />
      <Container
        component="main"
        maxWidth="md"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box padding={3}>{children}</Box>
      </Container>
    </>
  );
};

export default AuthRoute;
