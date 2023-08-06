import React, { useContext, useState } from "react";
import "../client/styles.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../client/UserContext";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
      //handle response

      console.log(error);
    }
    //clear all inputs
    //redirect
  };

  return (
    <div className="login-page">
      {/* <h1 className="tango-time"><span>Tango</span>Time</h1> */}
      <div className="login-container">
        <form className="form" onSubmit={handleLogin}>
          <h1>Welcome back!</h1>
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
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
          <button className="login-btn" type="submit">
            Log in
          </button>
          <div className="or">
            <hr></hr>
            Or
            <hr></hr>
          </div>
          <button className="signup-btn" onClick={() => navigate('/role')}>
            Sign up
          </button>
        </form>
      </div>
      <div className="login-img">
        <img
          src="https://s3-alpha-sig.figma.com/img/f7e7/f99f/14ce2e150a45e7e5ecced39cd3d1108b?Expires=1691971200&Signature=iPEj4LgfUCp3o38pBo9G2uZ-jXLdpCrSneI8Rzig-i3ASRO2H7fAOdxrOEHZ34L-bZJW3i7sXwV7Fr5IIB0Hdg2u5hhQbVI4Cad0mfxn~X0BFA9AGjYHtaqQTbHgdkbhG6SO1WyOm1EF4AdrpAcEPJphXIOIokrwRKo03D1rFuTf35-VKWM-U-m8feDrnFKXqIEI0NLAay791C7bp9bat1CpV40ay2XMMWMVk~B9XXrfDHFmNMj8uDeunvjHWp1FuOqBVoHKqKZDPfy~5lcDqfKaDly7JmERvfrjcPpJk3vJ59KRsWe62IxZTQj8soOOUTpL54BwmmbCttotau6jig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="dance couple"
        />
      </div>
    </div>
  );
};

export default Login;