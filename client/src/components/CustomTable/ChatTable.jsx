import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import chatTableStyle from "assets/jss/syncable-react/components/chatTableStyle.jsx";

function ChatTable({ ...props }) {
  const { classes, tableData } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        <TableBody>
          {tableData.map((prop, key) => {
            return (
              <TableRow key={key}>
                <TableCell className={classes.tableCell}>
                  {prop.viewerName + ": " + prop.content}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

ChatTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableData: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(chatTableStyle)(ChatTable);
