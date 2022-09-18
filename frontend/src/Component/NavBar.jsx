import { AppBar, Toolbar, styled, Button } from "@mui/material";
import Logo from "../Assets/Images/logo.svg";
import "@fontsource/montez";
import { NavLink } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = styled(AppBar)`
  background-color: #ffe0b2;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 25px;
  color: #4caf50;
  text-decoration: none;
`;

const AppbarHeader = styled(NavLink)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontSize: "35px",
  fontWeight: "bold",
  fontFamily: '"Montez", "cursive"',
  color: "#5d4037",
  textDecoration: "none", //this is to remove underline from the link
}));
const Image = styled("img")({
  width: "12%",
  height: "20%",
});

const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <Header position="sticky">
      <Toolbar>
        <AppbarHeader to="/">
          <Image src={Logo} />
        </AppbarHeader>
        {isAuthenticated ? (
          <>
            <Tabs to="all" exact>
              All Employee
            </Tabs>

            <Tabs to="add" exact>
              Add Employee
            </Tabs>
          </>
        ) : (
          <>
            <Tabs></Tabs>
          </>
        )}

        {isAuthenticated ? (
          <Button
            variant="contained"
            color="error"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </Button>
        ) : (
          <>
            <Button
              sx={{ margin: "20px" }}
              variant="contained"
              color="secondary"
              
            >
             Employee Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => loginWithRedirect()}
            >
              Admin Login
            </Button>
          </>
        )}
      </Toolbar>
    </Header>
  );
};

export default NavBar;
