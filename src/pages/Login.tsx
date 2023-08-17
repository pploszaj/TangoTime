import React, { useContext, useState } from "react";
import "../client/styles.scss";
import axios from "axios";
import image3 from '../assets/image3.jpg';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../client/UserContext";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { userData, updateUserData } = useContext(UserContext);

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      console.log("this is response", response);
      if (response.status === 200) {
        setLoginError(false);
        updateUserData({
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phone: response.data.phone,
          role: response.data.role,
        });
        navigate("/studenthome");
      }
    } catch (error) {
      console.log(error);
      setLoginError(true);
    }
  };

  return (
    <div className="login-page">
      {/* <h1 className="tango-time"><span>Tango</span>Time</h1> */}
      <div className="login-container">
        <form className="form" onSubmit={handleLogin}>
          <h1>Welcome!</h1>
          <p>
            If you already have an account just log in with your credentials or press sign up.
          </p>
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
          {loginError && (
            <p className="error-message">
              The email and password you entered did not match our records.
              Please double-check and try again.
            </p>
          )}
          <button className="login-btn" type="submit">
            Log in
          </button>
          <div className="or">
            <hr></hr>
            Or
            <hr></hr>
          </div>
          <button className="signup-btn" onClick={() => navigate("/role")}>
            Sign up
          </button>
        </form>
      </div>
      <div className="login-img">
        <img
          src={image3}
          alt="dance couple"
        />
      </div>
    </div>
  );
};

export default Login;
