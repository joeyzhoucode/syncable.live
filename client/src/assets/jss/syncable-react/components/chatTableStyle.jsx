import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont
} from "assets/jss/syncable-react.jsx";

const chatTableStyle = theme => ({
  warningTableHeader: {
    color: warningColor[0]
  },
  primaryTableHeader: {
    color: primaryColor[0]
  },
  dangerTableHeader: {
    color: dangerColor[0]
  },
  successTableHeader: {
    color: successColor[0]
  },
  infoTableHeader: {
    color: infoColor[0]
  },
  roseTableHeader: {
    color: roseColor[0]
  },
  grayTableHeader: {
    color: grayColor[0]
  },
  table: {
    marginBottom: "0",
    backgroundColor: "transparent",
    borderSpacing: "0",
    borderCollapse: "collapse"
  },
  tableHeadCell: {
    color: "inherit",
    ...defaultFont,
    fontSize: "1em"
  },
  tableCell: {
    ...defaultFont,
    lineHeight: "1.42857143",
    padding: "0px 6px",
    verticalAlign: "middle",
    borderBottom: "0",
  },
  tableResponsive: {
    padding: "0px 15px",
    width: "calc(100% - 30px)",
    height: "calc(100vh - 384px)",
    overflowX: "hidden"
  },
  tableResponsiveExpanded: {
    padding: "0px 15px",
    width: "calc(100% - 30px)",
    height: "100%",
    overflowX: "hidden"
  }
});

export default chatTableStyle;
