import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import VisibilityIcon from "@material-ui/icons/Visibility";
const useStyles = makeStyles(styles as any);

interface ActionTableProps {
  tableHeaderColor: 
    "warning" |
    "primary" |
    "danger" |
    "success" |
    "info" |
    "rose" |
    "gray"
  tableHead: string[]
  tableData: {}[]
  onAction: (index: number, action: string) => void
};


export default function ActionTable(props: ActionTableProps) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
              <TableCell
                className={classes.tableCell + " " + classes.tableHeadCell}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((data:any, i) => {
            return (
              <TableRow key={i} className={classes.tableBodyRow}>
                {tableHead.map((head, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {data[head]}
                    </TableCell>
                  );
                })}
                <TableCell className={classes.tableCell}>
                  <div>
                    <button
                      className="btn btn-success"
                      style={{ marginRight: "1rem" }}
                      onClick={() => props.onAction(i, "VIEW")}
                    >
                      <VisibilityIcon style={{ color: "white" }} />
                    </button>
                    <button
                      className="btn btn-warning"
                      style={{ marginRight: "1rem" }}
                      onClick={() => props.onAction(i, "EDIT")}
                    >
                      <EditIcon style={{ color: "white" }} />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.onAction(i, "DELETE")}
                    >
                      <CloseIcon />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

ActionTable.defaultProps = {
  tableHeaderColor: "gray",
};