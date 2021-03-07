import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
} from "@material-ui/core";
import InstitutionModel from "model/InstitutionModel";

export default function CreateInstitution() {
  const [institutionForm, setInstitutionForm] = React.useState<InstitutionModel>({
    address: '',
    id: 0,
    name: '',
    photo: ''
  }) 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInstitutionForm({
      ...institutionForm,
      [event.target.name] : event.target.value
    })
  }

  return (
    <Grid xs={12}>
      <h4>Create Institution</h4>
      <FormControl style={{ width: "100%", marginTop: "1rem"}}>
        <InputLabel htmlFor="my-input">Class Name</InputLabel>
        <Input name="name" value={institutionForm.name} id="my-input" aria-describedby="my-helper-text" onChange={handleChange} />
      </FormControl>
      <FormControl style={{ width: "100%", marginTop: "1rem"}}>
        <InputLabel htmlFor="my-input">Address</InputLabel>
        <Input name="address" value={institutionForm.address} id="my-input" aria-describedby="my-helper-text" onChange={handleChange} />
      </FormControl>
      <div style={{ width: "100%", marginTop: "1rem"}}>
        <Button
          variant="contained"
          component="label"
        >
          Upload File
          <input
            type="file"
            hidden
          />
        </Button>
      </div>
      <div style={{marginTop: "1rem"}}>
        <Button style={{ marginRight: "1rem"}} variant="contained" color="default">
          Cancel
        </Button>
        <Button variant="contained" color="primary">
          Create
        </Button>
      </div>
    </Grid>
  );
}
