import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Otpsuccess() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate();
  function submit(event) {
    console.log("submit");
    axios
      .post("https://backend-mmt.onrender.com/setPassword", {
        email: localStorage.getItem("email"),
        name: name,
        password: email,
      })
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => console.log(err));
    event.preventDefault();
  }
  return (
    <body>
      <div className="container">
        <div className="login-box">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
              <label>Username</label>
            </div>
            <div className="input-box">
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
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

export default Otpsuccess;
