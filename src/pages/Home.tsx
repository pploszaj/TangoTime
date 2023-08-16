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
      <section className="teachers-section">
        <h1>Our Teachers</h1>
        <TeachersImages/>
      </section>
    </>
  );
};

export default Home;
