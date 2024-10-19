import React from 'react';
import './AppCards.css'; // Import the CSS file for styling

const AppCards = () => {
  return (
    <section className="app-cards">
      <div className="cards">
        <div className="card">
          <img src="src\images\devicon--apple.png" alt="iOS App" />
          <h4>iOS App</h4>
          <p>Create, browse, and save palettes on the go.</p>
        </div>
        <div className="card">
          <img src="src\images\uim--android.png" alt="Android App" />
          <h4>Android App</h4>
          <p>Thousands of palettes in your pocket.</p>
        </div>
        <div className="card">
          <img src="src\images\solar--figma-bold.png" alt="Figma Plugin" />
          <h4>Figma Plugin</h4>
          <p>All palettes right in Figma.</p>
        </div>
        <div className="card">
          <img src="src\images\mingcute--chrome-fill.png" alt="Chrome Extension" />
          <h4>Chrome Extension</h4>
          <p>Access palettes using any site.</p>
        </div>
        <div className="card">
          <img src="src\images\uiw--adobe.png" alt="Adobe Extension" />
          <h4>Adobe Extension</h4>
          <p>Palettes for Adobe tools.</p>
        </div>
      </div>

      <div className="partner-logos">
        <p>Used by 5+ million designers and by top companies:</p>
        <div className="logos">
          <img src="src\images\tabler--brand-disney.png" alt="Disney" />
          <img src="src\images\cib--netflix.png" alt="Netflix" />
          <img src="src\images\hugeicons--airbnb.png" alt="Airbnb" />
          <img src="src\images\fluent--movies-and-tv-24-filled.png" alt="Sp" />
          <img src="src\images\mingcute--windows-fill.png" alt="Microsoft" />
          <img src="src\images\devicon--apple.png" alt="Mi" />
          <img src="src\images\mdi--dropbox.png" alt="Microsoft" />
          <img src="src\images\mdi--eight-ball.png" alt="Microsoft" />
          <img src="src\images\simple-icons--warnerbros.png" alt="Microsoft" />
          <img src="src\images\uiw--adobe.png" alt="Microsoft" />
          <img src="src\images\ph--soccer-ball-fill.png" alt="Microsoft" />
          <img src="src\images\simple-icons--ea.png" alt="Microsoft" />
       
        </div>
      </div>
    </section>
  );
};

export default AppCards;
