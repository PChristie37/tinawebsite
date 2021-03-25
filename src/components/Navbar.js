import React, { useState } from "react";
import Section from "components/Section";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "next/link";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useAuth } from "util/auth.js";
import useDarkMode from "use-dark-mode";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 28,
    marginRight: theme.spacing(2),
  },
  drawerList: {
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const auth = useAuth();
  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuState, setMenuState] = useState(null);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({ anchor: event.currentTarget, id });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return (
    <Section bgColor={props.color} size="auto">
      <AppBar position="static" color="transparent" elevation={0}>
        <Container disableGutters={true}>
          <Toolbar>
            <Link href="/">
              <a>
                <img src={logo} alt="Logo" className={classes.logo} />
              </a>
            </Link>

            <div className={classes.spacer} />
            <Hidden mdUp={true} implementation="css">
              <IconButton
                onClick={() => {
                  setDrawerOpen(true);
                }}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown={true} implementation="css">
              <Link href="/about" passHref={true}>
                <Button color="inherit" component="a">
                  About
                </Button>
              </Link>

              <Link href="/products" passHref={true}>
                <Button color="inherit" component="a">
                  Products
                </Button>
              </Link>

              <Link href="/resume" passHref={true}>
                <Button color="inherit" component="a">
                  Resume
                </Button>
              </Link>

              <IconButton
                color="inherit"
                onClick={darkMode.toggle}
                style={{ opacity: 0.6 }}
              >
                {darkMode.value && <NightsStayIcon />}

                {!darkMode.value && <WbSunnyIcon />}
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}
        >
          <Link href="/about" passHref={true}>
            <ListItem button={true} component="a">
              <ListItemText>About</ListItemText>
            </ListItem>
          </Link>

          <Link href="/resume" passHref={true}>
            <ListItem button={true} component="a">
              <ListItemText>Resume</ListItemText>
            </ListItem>
          </Link>

          <Link href="/products" passHref={true}>
            <ListItem button={true} component="a">
              <ListItemText>Products</ListItemText>
            </ListItem>
          </Link>
        </List>
        <IconButton
          color="inherit"
          onClick={darkMode.toggle}
          style={{ opacity: 0.6 }}
        >
          {darkMode.value && <NightsStayIcon />}

          {!darkMode.value && <WbSunnyIcon />}
        </IconButton>
      </Drawer>
    </Section>
  );
}

export default Navbar;
