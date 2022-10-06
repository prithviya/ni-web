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
                    Think Twice Code Once
                </h1>   
                <p className='text-black'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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