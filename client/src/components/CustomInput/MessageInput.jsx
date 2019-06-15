import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import Send from "@material-ui/icons/Send";
// core components
import messageInputStyle from "assets/jss/syncable-react/components/messageInputStyle.jsx";

function MessageInput({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    success
  } = props;

  const labelClasses = classNames({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error
  });
  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true
  });
  const marginTop = classNames({
    [classes.marginTop]: labelText === undefined
  });
  return (
    <div>
      <FormControl
        {...formControlProps}
        className={formControlProps.className + " " + classes.formControl}
      >
        <InputLabel
          className={classes.labelRoot + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
        <Input
          classes={{
            root: marginTop,
            disabled: classes.disabled,
            underline: underlineClasses
          }}
          value={props.messageInput}
          multiline
          onKeyPress={(target) => {
            if(target.charCode === 13) {
              target.preventDefault();
              props.sendContent({ message: props.messageInput, theatreCode: props.theatreCode});
              props.updateMessageInput("");
            }
          }}
          onChange={(event) => {
            props.updateMessageInput(event.target.value);
          }}
          {...inputProps}
        />
        {error ? (
          <Clear className={classes.feedback + " " + classes.labelRootError} />
        ) : success ? (
          <Check className={classes.feedback + " " + classes.labelRootSuccess} />
        ) : null}
      </FormControl>
      <IconButton onClick={() => {
        props.sendContent({ message: props.messageInput, theatreCode: props.theatreCode});
        props.updateMessageInput("");
      }}>
        <Send className={classes.iconButton} />
      </IconButton>
    </div>
  );
}

MessageInput.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  error: PropTypes.bool,
  success: PropTypes.bool
};

export default withStyles(messageInputStyle)(MessageInput);
