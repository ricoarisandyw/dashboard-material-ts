import React from "react";

export default function Login() {
  window.alert("LOGIN");
  return (
    <div>
      <form>
        <input placeholder="username" name="username" />
        <input placeholder="password" name="username" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
