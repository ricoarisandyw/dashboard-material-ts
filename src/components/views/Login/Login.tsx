import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import './Login.scss'

export default function Login() {

  const history = useHistory()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    history.push("/admin/dashboard")
  }

  return (
    <div style={{
      display:"flex",
      height:"100vh",
      width:"100vw"
    }}>
      <div className="LoginBox">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} style={{display:"grid"}}>
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl> 
          <FormControl>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
          </FormControl> 
          <Button type="submit" style={{marginTop: "1rem"}} variant="contained" color="primary">Log in</Button>
        </form>
      </div>
    </div>
  );
}
