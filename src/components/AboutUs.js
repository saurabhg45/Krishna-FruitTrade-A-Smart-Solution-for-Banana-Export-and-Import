import React from 'react';
import aboutImage from '../assets/about.png';

const AboutUs = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>
            Fresh Horizons is dedicated to bridging the gap between banana farmers and global buyers.
            We provide solutions for seamless transactions, tracking, and high-quality produce.
          </p>
        </div>
        <div className="col-md-6">
          <img 
            src={aboutImage}
            alt="About Us" 
            className="img-fluid rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
