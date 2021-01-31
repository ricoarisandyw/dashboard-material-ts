import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
} from "@material-ui/core";

export default function CreateLesson() {
  return (
    <Grid xs={12}>
      <h4>Create Lesson</h4>
      <FormControl style={{ width: "100%" }}>
        <InputLabel htmlFor="my-input">Lesson Name</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <Button style={{ marginTop: "1rem" }} variant="contained" color="primary">
        Create
      </Button>
    </Grid>
  );
}
