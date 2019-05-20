import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Airplay from "@material-ui/icons/Airplay";
import Remove from "@material-ui/icons/RemoveFromQueue";
import New from "@material-ui/icons/QueuePlayNext";
import Add from "@material-ui/icons/AddToQueue";
import Refresh from "@material-ui/icons/Refresh";
// core components
import tasksStyle from "assets/jss/syncable-react/components/tasksStyle.jsx";

class CustomTabContent extends React.Component {
  state = {
    checked: this.props.checkedIndexes
  };
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  };
  render() {
    const { classes, tasksIndexes, tasks, rtlActive } = this.props;
    const tableCellClasses = classnames(classes.tableCell, {
      [classes.tableCellRTL]: rtlActive
    })
    return (
      <Table className={classes.table}>
        <TableBody>
          <TableRow className={classes.tableRow}>
            <TableCell className={tableCellClasses}>
              <Add />
            </TableCell>
            <TableCell className={tableCellClasses}>
              Create A New Theatre
            </TableCell>
            <TableCell className={classes.tableActions}>
              <Tooltip
                id="tooltip-top"
                title="Generate New Theatre Code"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton aria-label="Generate New Theatre Code" className={classes.tableActionButton}>
                  <Refresh className={classes.tableActionButtonIcon + " " + classes.edit}/>
                </IconButton>
              </Tooltip>
              <Tooltip
                id="tooltip-top"
                title="Create New Theatre"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton aria-label="Create New Theatre" className={classes.tableActionButton}>
                  <New className={classes.tableActionButtonIcon + " " + classes.edit}/>
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
          {tasksIndexes.map(value => (
            <TableRow key={value} className={classes.tableRow}>
              <TableCell className={tableCellClasses}>
                <People />0
              </TableCell>
              <TableCell className={tableCellClasses}>
                {tasks[value]}
              </TableCell>
              <TableCell className={classes.tableActions}>
                <Tooltip
                  id="tooltip-top"
                  title="Join Theatre"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton aria-label="Join Theatre" className={classes.tableActionButton}>
                    <Airplay className={classes.tableActionButtonIcon + " " + classes.edit}/>
                  </IconButton>
                </Tooltip>
                <Tooltip
                  id="tooltip-top-start"
                  title="Remove Theatre"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Remove Theatre"
                    className={classes.tableActionButton}
                  >
                    <Remove
                      className={
                        classes.tableActionButtonIcon + " " + classes.close
                      }
                    />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

CustomTabContent.propTypes = {
  classes: PropTypes.object.isRequired,
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  rtlActive: PropTypes.bool
};

export default withStyles(tasksStyle)(CustomTabContent);
