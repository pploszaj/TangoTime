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
            src="https://s3-alpha-sig.figma.com/img/89b1/2c28/b27fbd2f729c61ac08f70dcb5e6e9d11?Expires=1693180800&Signature=a81eJrbh9R7pxFy9YL2dE8TZw67VDuOZrW9L59vwGdRnT~kz6OnB1QuxCax2qPQEZRAdoaHt64~U-lW1P1kiliJBnGU3o7Czj3Vj7Op13WOGnBfFpz2beM5i0S8G6L0e0PUq8VySsQSh2W8XMIcIpK4H78KeT-l7YgEqUwhaAp02icJyY94nxrnimPbdk4QBcEOnAykadkoIwzzuOBh1OyhJGPYpBV-NPqV4Xypl7kt8K2q5U0TlpqMb9keLzJkPKGxhWX5Y7kcpJwTvfIL0Ik9k83BkCELPP-PF-DxnPI51hSnmDtIHaFyeY8fzBYURi1tGkrjOQmf92KLoaYpgGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          ></img>
          <img
            className="grid-2"
            src="https://s3-alpha-sig.figma.com/img/1606/efd5/d7fe1770805c847192991d037125f54c?Expires=1693180800&Signature=QMPrcTcbgs4Z55BYIDFU00r-f6TtCq5p3MOYRZar~DhTic10EnDYLZmY9p0dUdOugfQIveBWkE-ONkIeQ9hVBGfLDcXIGXSjhM-qBLadsfYYg3pJecl0h3PTvoAQkAVFVdPwkwbTtOyPS-OXIA8q1j0Vkj8CuSuirLtBq7-wPuTujXDeR8-302PGrZKAFbIN-nLfm5MDC63b~-sJF6n3pT7eJMTAHm1t7GyXOsl3ZiDioawkvsWPmDvReyv~uyEtSclagkcvBnUATNn~9g~WesnJZULiDTpmBMXaT12cmudIssPg2QMajd08o8m618is1sa~X-ugknlLFdzZX-4gzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <img
            className="grid-3"
            src="https://s3-alpha-sig.figma.com/img/d715/57b4/e0361a765012ea15b3c94b3239fe9061?Expires=1693180800&Signature=B2GtfbIw-NcFczHET94Hxt229H6jZ-V16gtlKDxTHeduM2hAfW4SZ1GPr8zQy38ixXRyFiauXRn8dt610Pn4PGyu2gFt6Pb5j7h3K0iho0ik~VXtg7xRqJZrGz2HXHccrZ8LHUdBjomFCq5FMTGFNL217an4srSocPIGtautVxmg~XLHX9Oy-l7pS27wuF4LU2nQdL3bQE-ZfkzVRoiAzA-nz5ieJyXR9yi0ZCYMH3uMt59kMD10gYhn0V3ptRCF20vHNdfTB~FE7k7hgXK6pwgA5N~IitOL8SVER0ZFxDyrHKu3BSXH6xNaGktuFcRD~adpaa1AKnZix1rW2~eWyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <img
            className="grid-4"
            src="https://s3-alpha-sig.figma.com/img/bcb8/8e8f/483ec6a673609a0df856faafd1b9140e?Expires=1693180800&Signature=NuRzKoCB4i8LJ-GkMIsEN2Lw73m9jJU3ZvEdNKsWiDuRqnLiJkLQFwg~dwNb0yZIkiCwtmBKqiJMSt8ZZvziqFdutUnjuXo7IlEywbTFdrA16SsfjLPm~lM~IIgP54vsntcdVhvkE5gbpTXBxgKrBn51eyjz0i3ezwxPyex5fq37k~lxa6zatvg80V9wU9fuAr7syfSQbEnDMU22CzBZRbKHAoBYjDDdix9mG1ULmsLo~rJIP2sxUVX6xMDxdDpvr11dxlDV2Ru1r1CcAfPvQGtJ7yyBTJnYfbwaXqRypkVmftOAZ58kFvnqiek~YbAgnUV5fLO1tkTmKDo1xdCn1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <img
            className="grid-5"
            src="https://s3-alpha-sig.figma.com/img/4e20/b7e6/b22eb49432e8456e366a75fe3c3523c9?Expires=1693180800&Signature=AEZ~oYsuyNGFa7xMWlsRqq4ATHTS9RKgJAo-KHU3sVx9pgSR~og~~ZH~DBaRU2mfhZXG9uj3Jrkdd0IGm1AZKHsiDflzIkFj-b4OvfF~BM36SFp~673Yjbpr1wXE6hQ4-wgcVc0oMC7-mZkjoRIASq1dyyT1IEbGuBpdk9aBvXQDlSwHS8-WZFNstm8kzAYL~7qA9tyfT~gsEaW7P3SikiuAzQzIXc0rJm8-ZiWLx2XDWPWMD3wttJbhzutJrRESyJcfMO6QhlzYvgpwi6Qfeqa~z9uYwJfTYFi4lQv3rEB4tNZYOog1XxRk5Az6kF1genaheitBnwHo4xlmmDl0OA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <img
            className="grid-6"
            src="https://images.unsplash.com/photo-1575448914117-f015425e85a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"
            alt=""
          />
        </div>
      </section>
      <section className="testimonails-container">
        Testimonials
      </section>
    </>
  );
};

export default Home;
