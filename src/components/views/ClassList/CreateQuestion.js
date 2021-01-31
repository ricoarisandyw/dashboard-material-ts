import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
} from "@material-ui/core";

export default function CreateQuestion() {
  return (
    <Grid xs={12}>
      <h4>Create Question</h4>
      <FormControl style={{ width: "100%" }}>
        <InputLabel htmlFor="my-input">Question Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <Button style={{ marginTop: "1rem" }} variant="contained" color="primary">
        Create
      </Button>
    </Grid>
  );
}
