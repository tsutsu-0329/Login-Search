import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Navigate } from "react-router-dom";
import { HeaderDrawer } from "./HeaderDrawer";

export const Header = (props) => {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">
          <a href="/items">Venus.SEARCH</a>
        </Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>

        {/* <Button variant="outlined" size="small">
          <a href="/signup">SignUp</a>
        </Button>
        <Button variant="outlined" size="small">
          <a href="/items">For Client</a>
        </Button>
        <Button variant="outlined" size="small">
          <a href="/">For Serever</a>
        </Button> */}
        <HeaderDrawer />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>
    </React.Fragment>
  );
};

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
