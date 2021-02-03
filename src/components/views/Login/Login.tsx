import React from "react";
import { useHistory } from "react-router";

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
      <form style={{
        margin:"auto"
      }} onSubmit={handleSubmit}>
        <input placeholder="username" name="username" />
        <input placeholder="password" name="username" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
