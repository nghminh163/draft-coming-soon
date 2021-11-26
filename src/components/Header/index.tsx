import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import planteIcon from "@/assets/svg/plante.svg";
function Header() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      className={classes.root}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        >
          <Image src={planteIcon} alt="plante logo" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  root: {
    paddingTop: 30,
  },
  menuButton: {
    paddingLeft: 30,
  },
});

export default Header;
