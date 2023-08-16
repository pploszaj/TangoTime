import React from "react";
import { useNavigate } from "react-router-dom";
import "../client/styles.scss";
import HomeNav from "../components/HomeNav";
import myImage from "../assets/image2.jpg";
import TeachersImages from "../components/TeachersImages";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeNav />
      <div className="home-container">
        <img src={myImage} alt="background image"></img>
        <div className="home-text">
          <h1>The #1 Lesson Scheduling Platform for Passionate Dancers</h1>
          <p>
            TangoTime bridges the gap between dedicated teachers and eager
            students. Built for sophisticated lesson management, yet
            user-friendly enough for solo instructors and individual learners
            alike. Schedule, dance, and connect - all in one place.
          </p>
          <button className="home-btn" onClick={() => navigate("/login")}>
            Start Dancing
          </button>
        </div>
      </div>
      <section className="about">
        <p>
          TangoTime is an online platform that connects aspiring dancers with
          professional dance teachers. No matter your skill level, we make
          finding the right dance instructor easy and booking them even easier.
          From beginners looking for a fun new hobby to seasoned dancers seeking
          to refine their skills, we have the perfect teacher waiting for you.
        </p>
      </section>
      <section className="benefit-points-container">
        <div className="benefit-point">
          <i className="fa-solid fa-bolt" style={{ color: "#cf2626"}}></i>
          <h3>Instant Access</h3>
          Search from our comprehensive list of certified dance instructors to
          find the one that suits you.
        </div>
        <div className="benefit-point">
          <i
            className="fa-solid fa-calendar-days"
            style={{ color: "#b81919" }}
          ></i>
          <h3>Easy Booking</h3>
          Schedule lessons at your convenience with our seamless booking
          process.
        </div>
        <div className="benefit-point">
          <i className="fa-solid fa-trophy" style={{ color: "#c91d1d" }}></i>
          <h3>Learn from the Best</h3>
          Our teachers are carefully vetted and highly skilled to ensure the
          best learning experience.
        </div>
      </section>
      {/* <section className="teachers-section">
        <h1>Our Teachers</h1>
        <TeachersImages/>
      </section> */}
    </>
  );
};

export default Home;
