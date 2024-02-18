import React from "react";
import axios from "axios";
import { useState } from "react";
function Password() {
  const [email, setemail] = useState("");
  function submit(event) {
    console.log("submit");
    axios
      .post("https://backend-mmt.onrender.com/userCheck", {
        email: email,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  }
  return (
    <body>
      <div className="container">
        <div className="login-box">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <input type="password" required />
              <label>Password</label>
            </div>

            <button type="submit" className="btn" onClick={submit}>
              Login
            </button>
          </form>
        </div>
        {/* Placeholder spans */}
        {[...Array(50)].map((_, i) => (
          <span key={i} style={{ "--i": i }}></span>
        ))}
      </div>
    </body>
  );
}

export default Password;
