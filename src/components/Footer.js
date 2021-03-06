import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedIn from "@material-ui/icons/LinkedIn";
import useDarkMode from "use-dark-mode";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sticky: {
    marginTop: "auto",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("sm")]: {
      flex: "50%",
    },
  },
  brand: {
    display: "block",
    height: 32,
  },
  social: {
    alignItems: "flex-end",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    lineHeight: 1,
    "&:hover": {
      opacity: 0.8,
    },
    "&:not(:first-of-type)": {
      marginLeft: 20,
    },
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  right: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end",
    },
  },
  // Move links to end (bottom right)
  // Swaps position with social
  smallLinks: {
    [theme.breakpoints.up("sm")]: {
      order: 1,
    },
  },
}));

function Footer(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className={props.sticky && classes.sticky}
    >
      <Container>
        <div className={classes.wrapper}>
          <div className={`${classes.item} ${classes.left}`}>
            <Link href="/">
              <a>
                <img src={logo} alt="Logo" className={classes.brand} />
              </a>
            </Link>
          </div>
          <div
            className={`${classes.item} ${classes.right} ${classes.smallLinks}`}
          >
            <Typography>
              <Link href="/about">
                <a className={classes.link}>About</a>
              </Link>

              <Link href="/products">
                <a className={classes.link}>Products</a>
              </Link>

              <Link href="/resume">
                <a className={classes.link}>Resume</a>
              </Link>
            </Typography>
          </div>
          <div className={`${classes.item} ${classes.right} ${classes.social}`}>
           
          <a
              href="https://www.linkedin.com/in/tinasherer/"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <LinkedIn fontSize="small" />
            </a>

            <a
              href="https://www.facebook.com/TinaShererPhotography"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <FacebookIcon fontSize="small" />
            </a>
            <a
              href="https://www.instagram.com/tinasherer/"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <InstagramIcon fontSize="small" />
            </a>
          </div>

          {props.copyright && (
            <div className={`${classes.item} ${classes.left}`}>
              <Typography component="p">{props.copyright}</Typography>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
