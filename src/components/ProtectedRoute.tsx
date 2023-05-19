import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Header";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const checkUser = () => {
      const user = localStorage.getItem("pretest");
      if (!user || user === "undefined") {
        return navigate("/signin");
      }
      return;
    };
    checkUser();
  }, [navigate]);

  return (
    <>
      <Header auth />
      <Box sx={{ height: "100vh" }}>{children}</Box>
    </>
  );
};

export default ProtectedRoute;
