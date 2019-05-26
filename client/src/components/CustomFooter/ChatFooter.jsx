import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import footerStyle from "assets/jss/syncable-react/components/footerStyle.jsx";
import MessageInput from "components/CustomInput/MessageInput.jsx";

function ChatFooter({ ...props }) {
  const { classes } = props;
  const customInputId = "messageInput";
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
          <MessageInput
            formControlProps={{
              className: classes.margin + " " + classes.search
            }}
            inputProps={{
              placeholder: "Send a message...",
              inputProps: {
                "aria-label": "Search"
              }
            }}
            sendContent={props.sendContent}
            id={customInputId}
          />
      </div>
    </footer>
  );
}

ChatFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(ChatFooter);
