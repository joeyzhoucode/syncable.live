import {
  dangerColor,
  successColor,
  grayColor,
  defaultFont
} from "assets/jss/syncable-react.jsx";

const searchInputStyle = {
  disabled: {
    "&:before": {
      backgroundColor: "transparent !important"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: grayColor[4] + " !important",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: grayColor[4]
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor[0]
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor[0]
    }
  },
  labelRoot: {
    ...defaultFont,
    color: grayColor[4] + " !important",
    fontWeight: "400",
    lineHeight: "1.42857"
  },
  labelRootError: {
    color: dangerColor[0]
  },
  labelRootSuccess: {
    color: successColor[0]
  },
  feedback: {
    position: "absolute",
    top: "18px",
    right: "0",
    zIndex: "2",
    display: "block",
    width: "24px",
    height: "24px",
    textAlign: "center",
    pointerEvents: "none"
  },
  formControl: {
    position: "relative",
    verticalAlign: "unset",
    width: "90%",
  },
  searchWrapper: {
    textAlign: "center",
    display: "inline-block",
    width: "100%",
  },
};

export default searchInputStyle;
