import React from "react";

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
              <img
                src='https://i.pinimg.com/736x/1b/c7/d1/1bc7d100f583cc39ebb9d28cf2349032.jpg'
                alt='Nike'
              />
              <span className='hp-section2-image-text'>
                <h3>Nike Jordans</h3>
                <p>Jordan's popularity</p>
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div className='hp-section-2-box'>
              <img
                src='https://i.pinimg.com/564x/e1/bb/35/e1bb35b44990731e6737525444996e30.jpg'
                alt='Adidas'
              />
              <span className='hp-section2-image-text'>
                <h3> Adidas</h3>
                <p>Jordan's popularity</p>
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div className='hp-section-2-box'>
              <img
                src='https://i.pinimg.com/564x/32/14/df/3214dfa9ffd5b984b5918880f6bb2e76.jpg'
                alt='Reebok'
              />
              <span className='hp-section2-image-text'>
                <h3>Reebok</h3>
                <p>Jordan's popularity</p>
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div className='hp-section-2-box'>
              <img
                src='https://i.pinimg.com/564x/2b/b1/67/2bb167d3dfc0ea369773abe0c3c8fe37.jpg'
                alt='vans'
              />
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
