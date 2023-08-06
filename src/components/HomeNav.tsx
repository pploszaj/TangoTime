import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div className="home-nav">
      <div className="nav">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1000px-LEGO_logo.svg.png?20221012140704"
          alt="logo"
        />
      </div>
      <div className="nav-2">
        <Link to={'/signup'} style={{textDecoration: 'none', fontSize: '18px', color: 'black'}}>Sign up</Link>
        <Link to={'login'} style={{textDecoration: 'none', fontSize: '18px', color: 'black'}}>Log in</Link>
      </div>
    </div>
  );
};

export default HomeNav;