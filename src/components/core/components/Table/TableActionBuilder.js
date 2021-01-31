import React from "react";
import PropTypes from "prop-types";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function TableActionBuilder(props) {
  const classes = useStyles();
  const { index } = props;

  return (
    <>
      {props.actions &&
        props.actions.map((action, i) => (
          <TableCell key={"action_" + i} className={classes.tableCell}>
            <props.Component onAction={() => props.onAction(index, action)} />
          </TableCell>
        ))}
    </>
  );
}

TableActionBuilder.propTypes = {
  index: PropTypes.number,
  actions: PropTypes.arrayOf(PropTypes.any),
  onAction: PropTypes.func,
};
