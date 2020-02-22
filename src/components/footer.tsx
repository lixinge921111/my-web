import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Facebook from "../assets/ic-facebook.svg";
import Instagram from "../assets/ic-instagram.svg";
import Twitter from "../assets/ic-twitter.svg";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="fb" icon={Facebook} />
      <BottomNavigationAction label="ins" icon={Instagram} />
      <BottomNavigationAction label="twitter" icon={Twitter} />
    </BottomNavigation>
  );
};

export default Footer;
