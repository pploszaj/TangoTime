import React from "react";

const Testimonials = () => {
  return (
    <>
      <figure className="review">
        <figcaption>
          <blockquote>
            <p>
              I've always dreamt of learning to dance, but never knew where to
              start. Booking my first lesson on TangoTime was not only easy but
              truly inspiring. Thanks to TangoTime, I'm dancing with confidence
              and joy!
            </p>
          </blockquote>
          <h3>Konwalia Owczarz</h3>
          <h4>Student</h4>
        </figcaption>
      </figure>
      <figure className="review">
        <figcaption>
          <blockquote>
            <p>
              Our studio has witnessed a remarkable transformation since we
              started using TangoTime. Our teachers are busier than ever, and
              it's uplifting to see so many new students walk through our doors,
              eager to learn.
            </p>
          </blockquote>
          <h3>Jessica Lau</h3>
          <h4>Owner of Spotlight Dance Studio</h4>
        </figcaption>
      </figure>
      <figure className="review">
        <figcaption>
          <blockquote>
            <p>
              Before TangoTime, finding committed students was a challenge. Now,
              I have a platform that not only showcases my skills but also
              connects me with passionate learners. It's been a game-changer for me.{" "}
            </p>
          </blockquote>
          <h3>Patryk Ploszaj</h3>
          <h4>Instructor</h4>
        </figcaption>
      </figure>
    </>
  );
};

export default Testimonials;
