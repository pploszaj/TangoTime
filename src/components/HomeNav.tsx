import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="home-nav">
      <div className="nav">
      <h1 className="logo-text">
            Tango <span>Time</span>
          </h1>
      </div>
      <div className="nav-2">
        <Link to={'/signup'} style={{textDecoration: 'none', fontSize: '18px', color: 'black'}}>Sign up</Link>
        <Link to={'login'} style={{textDecoration: 'none', fontSize: '18px', color: 'black'}}>Log in</Link>
      </div>
    </div>
  );
};

export default HomeNav;