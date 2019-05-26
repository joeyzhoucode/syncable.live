import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Button from "components/CustomButtons/Button.jsx";
// core components
import AdminNavbarLinks from "components/Navbars/AdminNavbarLinks.jsx";
import ChatTable from "components/CustomTable/ChatTable.jsx";
import ChatFooter from "components/CustomFooter/ChatFooter.jsx";

import sidebarStyle from "assets/jss/syncable-react/components/sidebarStyle.jsx";

const Sidebar = ({ ...props }) => {
  const { classes, logo, logoText } = props;
  var brand = (
    <div className={classes.logo}>
      <Button onClick={() => { props.historyPush('/profile') }} color="transparent" className={classes.logoButton}>
        <img src={logo} alt="logo" className={classes.img} />
        <div className={classes.logoText}>
          {logoText}
        </div>
      </Button>
    </div>
  );
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={props.open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: false
            })
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {brand}
          <div className={classes.sidebarWrapper}>
            <AdminNavbarLinks historyPush={props.historyPush} />
            <ChatTable tableData={props.messages} />
            <ChatFooter sendContent={props.sendContent} theatreCode={props.theatreCode} />
          </div>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={"left"}
          variant="permanent"
          open
          classes={{ paper: classNames(classes.drawerPaper) }}
        >
          {brand}
          <ChatTable tableData={props.messages} />
          <ChatFooter sendContent={props.sendContent} theatreCode={props.theatreCode} />
        </Drawer>
      </Hidden>
    </div>
  );
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(sidebarStyle)(Sidebar);
