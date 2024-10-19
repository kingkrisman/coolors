import React from 'react';
import './AppCards.css'; // Import the CSS file for styling
import apple from "../../images/devicon--apple.png"
import android from "../../images/uim--android.png"
import figma from "../../images/solar--figma-bold.png"
import chrome from "../../images/mingcute--chrome-fill.png"
import adobe from "../../images/uiw--adobe.png"
import disney from "../../images/tabler--brand-disney.png"
import netflix from "../../images/cib--netflix.png"
import airbnb from "../../images/hugeicons--airbnb.png"
import sp from "../../images/fluent--movies-and-tv-24-filled.png"
import micro from "../../images/mingcute--windows-fill.png"
import mi from "../../images/devicon--apple.png"
import drop from "../../images/mdi--dropbox.png"
import ei from "../../images/mdi--eight-ball.png"
import wn from "../../images/simple-icons--warnerbros.png"
import ad from "../../images/uiw--adobe.png"
import wo from "../../images/ph--soccer-ball-fill.png"
import ea from "../../images/simple-icons--ea.png"











const AppCards = () => {
  return (
    <section className="app-cards">
      <div className="cards">
        <div className="card">
          <img src={apple} alt="iOS App" />
          <h4>iOS App</h4>
          <p>Create, browse, and save palettes on the go.</p>
        </div>
        <div className="card">
          <img src={android} alt="Android App" />
          <h4>Android App</h4>
          <p>Thousands of palettes in your pocket.</p>
        </div>
        <div className="card">
          <img src={figma} alt="Figma Plugin" />
          <h4>Figma Plugin</h4>
          <p>All palettes right in Figma.</p>
        </div>
        <div className="card">
          <img src={chrome} alt="Chrome Extension" />
          <h4>Chrome Extension</h4>
          <p>Access palettes using any site.</p>
        </div>
        <div className="card">
          <img src={adobe} alt="Adobe Extension" />
          <h4>Adobe Extension</h4>
          <p>Palettes for Adobe tools.</p>
        </div>
      </div>

      <div className="partner-logos">
        <p>Used by 5+ million designers and by top companies:</p>
        <div className="logos">
          <img src={disney} alt="Disney" />
          <img src={netflix} alt="Netflix" />
          <img src={airbnb} alt="Airbnb" />
          <img src={sp} alt="Sp" />
          <img src={micro} alt="Microsoft" />
          <img src={mi} alt="Mi" />
          <img src={drop} alt="Microsoft" />
          <img src={ei} alt="Microsoft" />
          <img src={wn} alt="Microsoft" />
          <img src={ad} alt="Microsoft" />
          <img src={wo} alt="Microsoft" />
          <img src={ea} alt="Microsoft" />
       
        </div>
      </div>
    </section>
  );
};

export default AppCards;
