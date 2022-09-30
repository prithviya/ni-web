
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
import Abt_section from './Components/abt/abt';

function App() {
  return (
    <div className="App">
     <>
        <div id="banner">
          <Banner/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Gallery/>
        </div>
        <div id="service">
          <Service/>
        </div>
        <div>
          <Choose/>
        </div>
        <div>
          <Contact/>
        </div>
        <div>
          <Footer/>
        </div>
     </>
    </div>
  );
}

export default App;
