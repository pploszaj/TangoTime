import React, { useState } from "react";
import "../client/styles.scss";
import axios from "axios";
import { response } from "express";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // const [isLogin, setLogin] = useState<boolean>(true);
  // const [firstName, setFirstName] = useState<string>("");
  // const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [phone, setPhone] = useState<string>("");
  // const [role, setRole] = useState<string>('STUDENT')
  const navigate = useNavigate();

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      console.log(response);
      if (response.status === 200) {
        navigate("/studenthome");
      }
    } catch (error) {
      //handle response

      console.log(error);
    }
    //clear all inputs
    //redirect
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleLogin}>
        <label htmlFor="loginEmail"></label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label htmlFor="loginPassword"></label>
        <input
          type="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="login-btn" type="submit">
          Login
        </button>
        <p>
          Don't have an account?{" "}
          <span className="signup-link" onClick={() => navigate("/role")}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
