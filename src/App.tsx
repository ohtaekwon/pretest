import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "context/AuthContext";
import { CssBaseline } from "@mui/material";

import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "components/AuthRoute";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/signin"
                element={
                  <AuthRoute>
                    <SignIn />
                  </AuthRoute>
                }
              />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
