import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Tools</h4>
        <ul>
          <li>Generate your palettes</li>
          <li>Explore popular palettes</li>
          <li>Extract palette from image</li>
          <li>Contrast checker</li>
          <li>Preview palettes on designs</li>
          <li>Recolor your own design</li>
          <li>Color picker</li>
          <li>Browse free fonts</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>More</h4>
        <ul>
          <li>List of colors <span className="new">NEW</span></li>
          <li>Browse gradients</li>
          <li>Create a gradient</li>
          <li>Make a gradient palette</li>
          <li>Image converter</li>
          <li>Create a collage</li>
          <li>Font Generator</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Jobs</h4>
        <ul>
          <li>Find your next job</li>
          <li>Post a job</li>
        </ul>
        <div className="footer-section">
        <h4>Apps</h4>
        <ul>
          <li>iOS App</li>
          <li>Android App</li>
          <li>Figma Plugin</li>
          <li>Adobe Extension <span className="new">NEW</span></li>
          <li>Chrome Extension</li>
          <li>Instagram Page</li>
        </ul>
      </div>

      </div>
      
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>Pricing</li>
          <li>License</li>
          <li>Terms of service</li>
          <li>Privacy policy</li>
          <li>Cookie policy</li>
          <li>Manage cookies</li>
          <li>Help center</li>
          <li>Advertise</li>
          <li>Affiliate</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
