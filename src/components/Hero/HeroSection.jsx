import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling

const HeroSection = () => {
  return (
    <div>
    <section className="hero">
      <div className="hero-content">
        <h1>The super fast <br /> color palettes <br /> generator!</h1>
        <p>
          Create the perfect palette or get inspired by <br /> thousands of beautiful color schemes.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Start the generator!</button>
          <button className="btn-secondary">Explore trending palettes</button>
        </div>
        <div className="product-hunt">
          <span className="trophy">🏆</span>
          <p><strong>#1 Product of the Month</strong></p>
        </div>
      </div>

      <div className="hero-images">
      
        
        <img src="src\images\heroimg.JPG" alt="Make a palette" className="palette-img" />
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
