import React, { useState } from "react";
import { Tabs, Tab, Box, Paper, Container } from "@mui/material";
import Login from "./Login";
import Register from "./Register";

const AuthTabs = ({ onLoginSuccess }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleRegisterSuccess = () => {
    // Switch to login tab after successful registration
    setValue(0);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tab label="Login" id="auth-tab-0" aria-controls="auth-tabpanel-0" />
        <Tab label="Register" id="auth-tab-1" aria-controls="auth-tabpanel-1" />
      </Tabs>
      <Box
        role="tabpanel"
        id={`auth-tabpanel-${value}`}
        aria-labelledby={`auth-tab-${value}`}
        sx={{ p: 2 }}
      >
        {value === 0 ? (
          <Login onLoginSuccess={onLoginSuccess} />
        ) : (
          <Register onRegisterSuccess={handleRegisterSuccess} />
        )}
      </Box>
      \{" "}
    </Container>
  );
};

export default AuthTabs;
