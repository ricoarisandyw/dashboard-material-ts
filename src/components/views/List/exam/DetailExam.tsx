import React from "react";
import ActionTable from "common/Table/ActionTable";
import Card from "common/Card/Card";
import CardHeader from "common/Card/CardHeader";
import CardBody from "common/Card/CardBody";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { ClassSeed, ClassModelHeader, ClassModelSeed } from "../seed/ClassSeed";
import GridItem from "common/Grid/GridItem";
import GridContainer from "common/Grid/GridContainer";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles as any);

function DetailExam() {
  const loc = useLocation();
  const classes = useStyles();
  const history = useHistory();

  const handleAction = () => {
    history.push("/admin/detail/question", loc.state);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <h2>Exam name : UAS</h2>
        <hr />
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Question List</h4>
            <p className={classes.cardCategoryWhite}>
              <a href="/admin/institution">PENS</a> /
              <a href="/admin/institution">IT B</a> /
              <a href="/admin/institution">Software Architecture</a> /
              <a href="/admin/institution">UAS</a> /
            </p>
            <div className="control">
              <button
                className="btn btn-success"
                onClick={() => history.push("/admin/create/question")}
              >
                +
              </button>
            </div>
          </CardHeader>
          <CardBody>
            <ActionTable
              tableHeaderColor="primary"
              tableHead={ClassModelHeader}
              tableData={ClassModelSeed}
              onAction={handleAction}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default DetailExam;
