import React from 'react';
import './banner.css';
import navigation_bar from '../Navbar/navbar';
import { Link } from "react-scroll";
import sample from '../../Static/banner.mp4';

function banner() {
  return (
    <div>
        <navigation_bar/>
        <div className='uk-section'>
            <div className='uk-container'>
                <div class="uk-grid-small uk-grid-match" data-uk-grid>
                    <div class="uk-width-1-2">
                        <div class="uk-card uk-card-body">
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
                    <div class="uk-width-1-2">
                        <div class="uk-card">
                            <video className='videoTag' autoPlay loop muted>
                                <source src={sample} type='video/mp4' />
                            </video>
                        </div>
                    </div>                    
                </div>    
            </div>
        </div>
        <div className='uk-section custom-sect-banner'>
            {/* <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video> */}
            <div className='uk-position uk-position-center uk-text-center'>
                {/* <h1 className='title text-orange'>
                    Redefining Possibilities
                </h1>    */}
                {/* <p className='text-black'>
                Transformation through innovation using niche technologies for Networks, Enterprise, IT and Industry Automation.
                </p> */}
                               
            </div>
        </div>
      
        {/* <Abt_sect/> */}
        
    </div>
  )
}

export default banner