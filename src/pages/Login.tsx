import React, { useContext, useState } from "react";
import "../client/styles.scss";
import axios from "axios";
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
            If you're returning to our site, we can't wait to see you move on
            the dance floor again. Simply log in below and let the rhythm take
            over. If you're here for the first time, we're thrilled to welcome
            you to our vibrant world of dance. Create an account and book a
            lesson with one of our experienced professionals today!
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
          src="https://s3-alpha-sig.figma.com/img/f7e7/f99f/14ce2e150a45e7e5ecced39cd3d1108b?Expires=1691971200&Signature=iPEj4LgfUCp3o38pBo9G2uZ-jXLdpCrSneI8Rzig-i3ASRO2H7fAOdxrOEHZ34L-bZJW3i7sXwV7Fr5IIB0Hdg2u5hhQbVI4Cad0mfxn~X0BFA9AGjYHtaqQTbHgdkbhG6SO1WyOm1EF4AdrpAcEPJphXIOIokrwRKo03D1rFuTf35-VKWM-U-m8feDrnFKXqIEI0NLAay791C7bp9bat1CpV40ay2XMMWMVk~B9XXrfDHFmNMj8uDeunvjHWp1FuOqBVoHKqKZDPfy~5lcDqfKaDly7JmERvfrjcPpJk3vJ59KRsWe62IxZTQj8soOOUTpL54BwmmbCttotau6jig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="dance couple"
        />
      </div>
    </div>
  );
};

export default Login;
