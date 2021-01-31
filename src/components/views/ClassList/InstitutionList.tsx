import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "common/Grid/GridItem";
import GridContainer from "common/Grid/GridContainer";
import ActionTable from "common/Table/ActionTable";
import Card from "common/Card/Card";
import CardHeader from "common/Card/CardHeader";
import CardBody from "common/Card/CardBody";
import { useHistory } from "react-router-dom";
import InstitutionAPI from "services/InstitutionAPI";

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

export default function InstitutionList() {
  const [institutionList, setInstitutionList] = React.useState([]);
  const classes = useStyles();
  const history = useHistory();

  const handleAction: ((...args: any[]) => any) = (index, action) => {
    if (action === "VIEW") {
      history.push("/admin/detail/institution", institutionList[index]);
    }
  };

  React.useEffect(() => {
    InstitutionAPI()
      .getAll()
      .then((res) => setInstitutionList(res.values));
  }, []);

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Institution List</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
            <div className="control">
              <button
                className="btn btn-success"
                onClick={() => history.push("/admin/create/institution")}
              >
                +
              </button>
            </div>
          </CardHeader>
          <CardBody>
            <ActionTable
              tableHeaderColor="primary"
              tableHead={["name", "address", "photo"]}
              tableData={institutionList}
              onAction={handleAction}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
