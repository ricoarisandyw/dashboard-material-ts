import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import ActionTable from "components/Table/ActionTable";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { ClassSeed, ClassModelHeader } from "./ClassSeed";
import "./ClassList.css";
import { useHistory, useLocation } from "react-router-dom";
import ClassAPI from "services/ClassAPI";

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

export default function ClassList() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [classList, setClassList] = React.useState([]);

  const handleAction = (index, action) => {
    if (action === "VIEW") {
      history.push("/admin/detail/class", ClassSeed[index]);
    }
  };

  React.useEffect(() => {
    ClassAPI()
      .getByInstitutionId(1)
      .then((res) => setClassList(res.values));
  }, []);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Class List</h4>
            <p className={classes.cardCategoryWhite}>
              {JSON.stringify(location.state)}
            </p>
            <div className="control">
              <button
                className="btn btn-success"
                onClick={() => history.push("/admin/create/class")}
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
