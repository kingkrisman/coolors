import "./Headersty.css";
import React  from 'react';


const Header = () => {
  return (
  <div>
    <div className="header">
    <div className="logo"> <img src="src\images\logo.svg" className="logo" /></div>
    <div className="nav">
        <main className="links">
            <div className="tools">Tools</div>
            <div className="gopro">Go Pro</div>
            <button className="signin">Sign In</button>
            <button className="signup">Sign Up</button>
        </main>


    </div>
    </div>
  </div>
    
  )
}


export default Header