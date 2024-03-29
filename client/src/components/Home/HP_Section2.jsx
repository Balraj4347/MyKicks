import React from "react";
import { Link } from "react-router-dom";
import nikejordans from "../../assets/media/nikeJordans.jpeg";
import adidas from "../../assets/media/Adidas.jpeg";
import reebok from "../../assets/media/reebok.jpeg";
import vans from "../../assets/media/vans.jpeg";

const Section2 = () => {
  return (
    <section className=' homepage-section-2'>
      <div className='hp-section-2-heading'>
        <h2>Popular Brands</h2>
      </div>
      <div className='hp-section-2-brands'>
        <ul>
          <li>
            <div className='hp-section-2-box'>
              <Link to='/newarrival'>
                <img draggable={false} src={nikejordans} alt='Nike' />
              </Link>
              <span className='hp-section2-image-text'>
                <h3>Nike Jordans</h3>
                <p>Jordan's popularity</p>
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div className='hp-section-2-box'>
              <Link to='/newarrival'>
                <img draggable={false} src={adidas} alt='Adidas' />
              </Link>
              <span className='hp-section2-image-text'>
                <h3> Adidas</h3>
                <p>Jordan's popularity</p>
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div className='hp-section-2-box'>
              <Link to='/newarrival'>
                <img draggable={false} src={reebok} alt='Reebok' />
              </Link>
              <span className='hp-section2-image-text'>
                <h3>Reebok</h3>
                <p>Jordan's popularity</p>
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div className='hp-section-2-box'>
              <Link to='/newarrival'>
                <img draggable={false} src={vans} alt='vans' />
              </Link>
              <span className='hp-section2-image-text'>
                <h3>Vans</h3>
                <p>Jordan's popularity</p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Section2;
