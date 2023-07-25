import React from "react";
import { useNavigate } from "react-router-dom";
import "../client/styles.scss";
import HomeNav from "../components/HomeNav";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeNav />
      <div className="home-container">
        <div className="home-text">
          <h1 className="logo-text">
            Tango <span>Time</span>
          </h1>
          <button className="home-btn" onClick={() => navigate("/login")}>
            Start Dancing
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
