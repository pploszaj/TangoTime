import React, { useState } from "react";
import "../client/styles.scss";
import axios from "axios";

export const Login = () => {
  const [isLogin, setLogin] = useState<boolean>(true);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    //make get request
    //clear all inputs
    //redirect
  };

  const handleSignup = (e: any) => {
    e.preventDefault();
    //make post request
    //clear inputs
    //redirect
  };

  return (
    <div className="login-container">
      {isLogin ? (
        <>
          <form className="form" onSubmit={handleLogin}>
            <label htmlFor="loginEmail"></label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="loginPassword"></label>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="login-btn" type="submit">
              Login
            </button>
            <p>
              Don't have an account?{" "}
              <span className="signup-link" onClick={() => setLogin(false)}>
                Sign up
              </span>
            </p>
          </form>
        </>
      ) : (
        <>
          <form className="form" onSubmit={handleSignup}>
            <label htmlFor="name"></label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="phone"></label>
            <input
              id="phone"
              type="tel"
              value={phone}
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="login-btn" type="submit">
              Sign Up
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
