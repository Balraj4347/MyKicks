import React from "react";
import "../Styles/HomePage.css";

// -----------------------------------
import Section1 from "../components/HomePage_Sections/HP_Section1";
import Section2 from "../components/HomePage_Sections/HP_Section2";
import Section3 from "../components/HomePage_Sections/HP_Section3";
// -----------------------------------

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default HomePage;
