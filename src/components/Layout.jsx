import { Container, Typography, AppBar, Toolbar, styled } from "@mui/material";
import { Outlet, NavLink } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const footerText = {
  mx: "3vw",
  fontSize: "1.25rem"
};

const Layout = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ bgcolor: "#555", display: "flex", justifyContent: "end" }}
      >
        <Toolbar>
          <NavLink to="/" className={setActive}>
            <Typography sx={{ fontSize: "1.8rem" }}>Home</Typography>
          </NavLink>
          <NavLink to="/users" className={setActive}>
            <Typography sx={{ fontSize: "1.8rem" }}>Users</Typography>
          </NavLink>
          <NavLink to="/albums" className={setActive}>
            <Typography sx={{ fontSize: "1.8rem" }}>Albums</Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container sx={{ mt: "7vh", minHeight: "90vh" }}>
        <Outlet />
      </Container>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          p: 3.7,
          bgcolor: "#000"
        }}
      >
        <Typography sx={footerText}>
          Created by: sssBless
        </Typography>
        <Typography sx={footerText}>BSU: 2023</Typography>
      </AppBar>
    </>
  );
};
export { Layout };
