import React from "react";
import { useNavigate } from "react-router-dom";
import "../client/styles.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="logo-text">Tango <span>Time</span></h1>
        <button className="home-btn" onClick={() => navigate("/login")}>
          Start Dancing
        </button>
      </div>
    </div>
  );
};

export default Home;
