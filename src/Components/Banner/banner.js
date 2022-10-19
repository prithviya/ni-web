import React from 'react';
import './banner.css';
import Navigation_Bar from '../Navbar/navbar';
import Product from '../Product/product';
import Apply from '../Apply/apply';
import Abt_sect from '../abt/abt';

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
                <button class="button"> 
                    Explore more
                </button>
            </div>
        </div>
        <Product/>
        {/* <Abt_sect/> */}
        <Apply/>
    </div>
  )
}

export default banner