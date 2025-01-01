import React, { useState } from "react";
import "./Signin.css";
import logo from "../Img/logo.png";
import { Link } from "react-router-dom";

const Signin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="signIn">
      <div>
        <div className="loginForm">
          <img className="signUpLogo" src={logo} alt="" />
          <div>
            <input type="email" name="email" id="email" value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
          <input type="submit" id="login-btn" value="Sign In" />
        </div>
        <div className="loginForm2">
          Don't have an account ?
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signin
