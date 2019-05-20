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

function TheatreTabContent({ ...props }) {
  const { classes } = props;
  const tableCellClasses = classnames(classes.tableCell);

  return (
    <Table className={classes.table}>
      <TableBody>
        <TableRow className={classes.tableRow}>
          <TableCell className={tableCellClasses}>
            <Add />
          </TableCell>
          <TableCell className={tableCellClasses}>
            {props.newTheatreCode}
          </TableCell>
          <TableCell className={tableCellClasses}>
            {"http://syncable.live/player/" + props.newTheatreCode}
          </TableCell>
          <TableCell className={classes.tableActions}>
            <Tooltip
              id="tooltip-top"
              title="Generate New Theatre Code"
              placement="top"
              classes={{ tooltip: classes.tooltip }}
            >
              <IconButton aria-label="Generate New Theatre Code" className={classes.tableActionButton} onClick={props.theatreGenerate}>
                <Refresh className={classes.tableActionButtonIcon + " " + classes.edit}/>
              </IconButton>
            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Create New Theatre"
              placement="top"
              classes={{ tooltip: classes.tooltip }}
            >
              <IconButton aria-label="Create New Theatre" className={classes.tableActionButton} onClick={() => { props.theatreCreate(props.newTheatreCode) }}>
                <New className={classes.tableActionButtonIcon + " " + classes.edit}/>
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
        {props.theatres.map(t => (
          <TableRow key={t.id} className={classes.tableRow}>
            <TableCell className={tableCellClasses}>
              <People />{t.viewers}
            </TableCell>
            <TableCell className={tableCellClasses}>
              {t.code}
            </TableCell>
            <TableCell className={tableCellClasses}>
              {"http://syncable.live/player/" + t.code}
            </TableCell>
            <TableCell className={classes.tableActions}>
              <Tooltip
                id="tooltip-top"
                title="Join Theatre"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton aria-label="Join Theatre" className={classes.tableActionButton} onClick={() => { props.historyPush("/player/" + t.code) }}>
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
                  onClick={() => { props.theatreDestroy(t.id) }}
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

TheatreTabContent.propTypes = {
  classes: PropTypes.object.isRequired,
  theatres: PropTypes.arrayOf(PropTypes.object),
  newTheatreCode: PropTypes.string
};

export default withStyles(tasksStyle)(TheatreTabContent);
