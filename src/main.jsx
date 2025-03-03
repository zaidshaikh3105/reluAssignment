import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  Container,
  CssBaseline,
  CircularProgress,
  Box,
  Fade,
} from "@mui/material";
import AuthTabs from "./components/AuthTabs";
import Home from "./Home";
import { auth } from "./services/firebase";

const Main = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginSuccess = () => {
    setUser(auth.currentUser);
  };

  if (loading) {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <Fade in={loading} style={{ transitionDelay: "300ms" }}>
            <CircularProgress size={60} thickness={4} />
          </Fade>
        </Box>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth={false} disableGutters>
      {" "}
      <CssBaseline />
      {user ? <Home /> : <AuthTabs onLoginSuccess={handleLoginSuccess} />}
    </Container>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
