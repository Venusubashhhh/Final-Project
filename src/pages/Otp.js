import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Otpsuccess from "./Otpsuccess";
function Otp() {
  const [email, setemail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    console.log("otp");
    axios
      .post("https://backend-mmt.onrender.com/otpEmail", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function submit(event) {
    axios
      .post("https://backend-mmt.onrender.com/verifyEmail", {
        email: localStorage.getItem("email"),
        otp: email,
      })
      .then((res) => {
        console.log(res);
        navigate("/otpsuccess");
      })
      .catch((res) => console.log(res));
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
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <label>OTP</label>
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

export default Otp;
