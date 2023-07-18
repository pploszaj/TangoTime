import React, { useState, useContext } from "react";
import { UserContext } from "../client/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import TeacherSignup from "./TeacherSignup";

export const Signup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { userData, updateUserData } = useContext(UserContext);


  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/signup", {
        firstName,
        lastName,
        email,
        password,
        phone,
        role: userData.role,
      });
      //save user data to context
      updateUserData({firstName, lastName, phone, email})
      //handle response
      console.log(response);
      if(userData.role === 'TEACHER'){
        navigate('/teachersignup')
      } else {
        navigate('/studenthome')
      }
    } catch (error) {
      //handle error
      console.log(error);
    }

    //make post request
    //clear inputs
    //redirect
  };

  return (
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
        <span className="signup-link" onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
    </form>
  );
};

export default Signup;
