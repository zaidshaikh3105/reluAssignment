import React from "react";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import AppLayout from "./components/AppLayout";
import Header from "./components/Header";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <CssBaseline />
      {!isMobile && <Header />}
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          width: "100%",
          bgcolor: "#F9FAFB",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AppLayout />
      </Box>
    </>
  );
};

export default Home;
