import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Grid,
  InputBase,
  Button,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";

// Theme constants
const COLORS = {
  background: "#f8f8f8",
  border: "#eaeaea",
  primary: "#7FCAC3",
  primaryHover: "#6BB8B0",
};

const STYLES = {
  header: {
    width: "100%",
    p: 2,
    bgcolor: COLORS.background,
  },
  logo: {
    fontWeight: "bold",
    variant: "h6",
  },
  searchPaper: {
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    borderRadius: 2,
    border: `1px solid ${COLORS.border}`,
    boxShadow: "none",
  },
  searchInput: {
    ml: 1,
    flex: 1,
  },
  button: {
    borderRadius: 2,
    bgcolor: COLORS.primary,
    textTransform: "none",
    fontWeight: 500,
    px: 3,
    "&:hover": {
      bgcolor: COLORS.primaryHover,
    },
  },
};

const Header = () => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  };
  return (
    <Box sx={STYLES.header}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={3}>
          <Typography sx={STYLES.logo}>LOGO</Typography>
        </Grid>

        <Grid item xs={6}>
          <Paper component="form" sx={STYLES.searchPaper}>
            <IconButton aria-label="search" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={STYLES.searchInput}
              placeholder="Search here..."
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton aria-label="filters" sx={{ p: 1 }}>
              <FilterIcon />
            </IconButton>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              sx={STYLES.button}
              onClick={handleLogout}
            >
              Logout{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
