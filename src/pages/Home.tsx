import React from "react";
import { useNavigate } from "react-router-dom";
import "../client/styles.scss";
import HomeNav from "../components/HomeNav";
import myImage from "../assets/image2.jpg";
import Testimonials from "../components/Testimonials";
import Carousel from '../components/Carousel'
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';



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
          <i
            className="fa-solid fa-bolt"
            style={{ color: "#c40f0f", fontSize: "40px", marginBottom: "1rem" }}
          ></i>
          <h3>Instant Access</h3>
          Search from our comprehensive list of certified dance instructors to
          find the one that suits you.
        </div>
        <div className="benefit-point">
          <i
            className="fa-solid fa-calendar-days"
            style={{ color: "#c40f0f", fontSize: "40px", marginBottom: "1rem" }}
          ></i>
          <h3>Easy Booking</h3>
          Navigate through our intuitive system to schedule dance lessons that
          fit perfectly into your calendar.
        </div>
        <div className="benefit-point">
          <i
            className="fa-solid fa-trophy"
            style={{ color: "#c40f0f", fontSize: "40px", marginBottom: "1rem" }}
          ></i>
          <h3>Learn from the Best</h3>
          Our teachers are carefully vetted and highly skilled to ensure the
          best learning experience.
        </div>
      </section>
      <section className="gallery-grid-container">
        <div className="gallery-grid">
          <img
            className="grid-1"
            src={image4}
          ></img>
          <img
            className="grid-2"
            src={image5}
            alt=""
          />
          <img
            className="grid-3"
            src={image6}
            alt=""
          />
          <img
            className="grid-4"
            src={image8}
            alt=""
          />
          <img
            className="grid-5"
            src={image7}
            alt=""
          />
          <img
            className="grid-6"
            src="https://images.unsplash.com/photo-1575448914117-f015425e85a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
            alt=""
          />
        </div>
      </section>
      <section className="testimonials-container">
        <Testimonials />
      </section>
      <h3 className="carousel-title">Types of Dances</h3>
      <Carousel/>
      <footer>
        <div className="footer">
          &copy;
          <span> 2023 TangoTime. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
};

export default Home;
