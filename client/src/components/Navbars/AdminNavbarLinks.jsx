import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Home from "@material-ui/icons/Home";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/syncable-react/components/headerLinksStyle.jsx";

function HeaderLinks({...props}) {
  const { classes } = props;
  return (
    <div>
      <Button
        color={"transparent"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Home"
        className={classes.buttonLink}
        onClick={() => { props.historyPush('/home')}}
      >
        <Home className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Home</p>
        </Hidden>
      </Button>
      <Button
        color={"transparent"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Person"
        className={classes.buttonLink}
        onClick={() => { props.historyPush('/profile')}}
      >
        <Person className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Profile</p>
        </Hidden>
      </Button>
    </div>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
