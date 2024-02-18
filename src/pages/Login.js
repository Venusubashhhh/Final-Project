import React, { useState } from 'react';
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login() {
    const[email,setemail]=useState('')
    const navigate=useNavigate()
    function submit(event)
    {
        localStorage.setItem('email',email);
        console.log('submit')
        axios.post('https://backend-mmt.onrender.com/userCheck',{
            email:email}).then((res)=>{console.log(res)
          navigate('/password')
            }).catch((err)=>{console.log(err)
        navigate('/otp')
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
              <input type="email"  value={email} onChange={(e)=>setemail(e.target.value)} required />
              <label>Email</label>
            </div>
           
            <button type="submit" className="btn" onClick={submit}>
              Login
            </button>
         
          </form>
        </div>
        {/* Placeholder spans */}
        {[...Array(50)].map((_, i) => (
          <span key={i} style={{'--i': i}}></span>
        ))}
      </div>
    </body>
  );
}

export default Login;
