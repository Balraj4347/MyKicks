import React from "react";
import "../Styles/HomePage.css";
import bgVideo from "../components/Media/CLIP_MyKicks_homepage.mp4";

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <section className='homepage-section-1'>
        <video autoPlay loop muted id='homepage-video'>
          <source src={bgVideo} type='video/mp4' />
        </video>
        <div className='hp-section1-text'>
          <h2>MyKicks</h2>
          <p>Life isn't Perfect but your Sneaker can be</p>
        </div>
      </section>
      <section className='aasdsada'>section 2</section>
      <section className='aasdsada'>section 3</section>
      <section className='aasdsada'>section 4</section>
    </div>
  );
};

export default HomePage;
