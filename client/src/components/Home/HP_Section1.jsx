import React from "react";
import bgVideo from "../../assets/media/CLIP_MyKicks_homepage.mp4";
const Section1 = () => {
  return (
    <section className='homepage-section-1'>
      <video autoPlay loop muted id='homepage-video'>
        <source src={bgVideo} type='video/mp4' />
      </video>
      <div className='hp-section1-text'>
        <h2>MyKicks</h2>
        <p>Life isn't Perfect but your Sneaker can be</p>
      </div>
    </section>
  );
};

export default Section1;
