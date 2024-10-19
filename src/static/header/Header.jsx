import "./Headersty.css";
import React  from 'react';
import logo from "../../images/logo.svg"

const Header = () => {
  return (
  <div>
    <div className="header">
    <div className="logo"> <img src={logo} className="logo" /></div>
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