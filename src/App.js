
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js";
import './App.css';
import Banner from './Components/Banner/banner';
import Service from './Components/Service/service';
import About from './Components/About/about';
import Choose from './Components/Choose/choose';
import Contact from "./Components/Contact/test";
import Footer from './Components/Footer/footer';
import Gallery from './Components/Gallery/gallery';
// import Abt_section from './Components/abt/abt';
import Product from './Components/Product/product';
import Apply from './Components/Apply/apply';

function App() {
  return (
    <div className="App">
     <>
        <div id="home">
          <Banner/>
          <Product/>
          <Apply/>
        </div>
        <div id='about'>
          <About/>
        </div>
        <div>
          <Gallery/>
        </div>
        <div id="service">
          <Service/>
        </div>
        <div >
          <Choose/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
        <div id='footer'>
          <Footer/>
        </div>
     </>
    </div>
  );
}

export default App;
