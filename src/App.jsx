import "./App.css";


import HeroSection from "./components/Hero/HeroSection";
import Footer from "./static/footer/Footer";
import Header from "./static/header/Header";
import AppCards from "./components/appcard/AppCards";


const App = () => {
  return (
    <div>
<Header/>

<HeroSection/>
<AppCards/>
      <Footer/>
    </div>
  )
}


export default App