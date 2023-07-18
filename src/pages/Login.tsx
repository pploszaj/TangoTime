import React, { useState } from "react";
import "../client/styles.scss";
import axios from "axios";
import { response } from "express";


export const Login = () => {
  const [isLogin, setLogin] = useState<boolean>(true);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [role, setRole] = useState<string>('STUDENT')

  const handleLogin = async (e: any) => {
    e.preventDefault();
    // console.log(email)
    // console.log(password)
    //make get request
    try {
      const response = await axios.post('/login', {
        email, password
      })
      console.log(response)
    }
    //handle response
    
    catch (error) {
      console.log(error)
    }
    //clear all inputs
    //redirect

  };

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup', {
         firstName, lastName, email, password, phone, role 
      })
      //handle response
      console.log(response)

    } catch (error) {
      //handle error
      console.log(error)
    }
   
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
              <span className="signup-link" onClick={() => setLogin(false)}>
                Sign up
              </span>
            </p>
          </form>
        </>
      ) : (
        <>
          <form className="form" onSubmit={handleSignup}>
            <label htmlFor="firstName"></label>
            <input
              id="firstName"
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <label htmlFor="lastName"></label>
            <input
              id="lastName"
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="phone"></label>
            <input
              id="phone"
              type="tel"
              value={phone}
              required
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
            <label htmlFor="password"></label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button className="login-btn" type="submit">
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <span className="signup-link" onClick={() => setLogin(true)}>
               Login
              </span>
            </p>
          </form>
        </>
      )}
    </div>
  );
};

export default Login;
