import React from 'react';
import './banner.css';
import Navigation_Bar from '../Navbar/navbar';
import { Link } from "react-scroll";

function banner() {
  return (
    <div>
        <Navigation_Bar/>
        <div className='uk-section custom-sect-banner'>
            <div className='uk-position uk-position-center uk-text-center'>
                <h1 className='title text-orange'>
                    Redefining Possibilities
                </h1>   
                <p className='text-black'>
                Transformation through innovation using niche technologies for Networks, Enterprise, IT and Industry Automation.
                </p>
                <Link to='contact' spy={true} smooth={true}>
                    <button className="button"> 
                        Explore more
                    </button>
                </Link>               
            </div>
        </div>
      
        {/* <Abt_sect/> */}
        
    </div>
  )
}

export default banner