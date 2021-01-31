import React from "react";
import ActionTable from "components/Table/ActionTable";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { ClassSeed, ClassModelHeader } from "./ClassSeed";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

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

const useStyles = makeStyles(styles);

function Detail() {
  const loc = useLocation();
  const classes = useStyles();
  const history = useHistory();

  const handleAction = () => {
    history.push("/admin/detail/lesson", loc.state);
  };

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <h2>Class name : PENS</h2>
        <h4>Code : A1F23</h4>
        <hr />
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Lesson List</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
            <div className="control">
              <button
                className="btn btn-success"
                onClick={() => history.push("/admin/create/lesson")}
              >
                +
              </button>
            </div>
          </CardHeader>
          <CardBody>
            <ActionTable
              tableHeaderColor="primary"
              tableHead={ClassModelHeader}
              tableData={ClassSeed}
              onAction={handleAction}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default Detail;
