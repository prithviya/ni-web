import React from 'react';
import './navbar.css'
import Images from '../../Constant/asset';
import { Link } from "react-scroll";

function navbar() {
  return (
    <div>
        <nav className='uk-navbar-container' data-uk-navbar>
            <div className='uk-navbar-left uk-margin-medium-left'>
                <ul className='uk-navbar-nav'>
                    <li className='uk-active'>
                        <a href="#/" rel="noreferrer noopener">
                            <img src={ Images.BRAND_LOGO } alt='logo' width='150px' height='150px' />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="uk-navbar-right uk-margin-medium-right">
                <ul className="uk-navbar-nav">
                    <li className='uk-visible@m custom_nav_menu'>                        
                        <Link to="home" className='text-white' spy={true} smooth={true}>Home</Link>                        
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                        <Link to="about" className='text-white' spy={true} smooth={true}>About</Link>
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                        <Link className='text-white' to="service" spy={true} smooth={true}>Service</Link>
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                    <Link to="contact" className='text-white' spy={true} smooth={true}>Testimonials</Link>
                    </li>
                    <li className='uk-visible@m custom_nav_menu'>
                    <Link to="footer" className='text-white' spy={true} smooth={true}>Contact</Link>
                    </li>
                    <li className='uk-hidden@m custom_nav_menu'>
                        <a href='#/' className="uk-margin-small-right" uk-toggle="target: #offcanvas-nav-primary">
                            <img src={ Images.MENU } alt='menu'/>
                        </a>                       
                    </li>
                    <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                            <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                                <li className='uk-active'>
                                    <a href="#/" className='uk-hidden@m custom_nav_menu' rel="noreferrer noopener"> 
                                        <img src={ Images.BRAND_LOGO } alt='logo' width='80px' height='80px' />
                                    </a>
                                </li>
                                <hr/>
                                <li className='uk-hidden@m custom_nav_menu'>                        
                                    <Link to="home" className='text-white' spy={true} smooth={true}>Home</Link>                        
                                </li>
                                <li className='uk-hidden@m custom_nav_menu'>
                                    <Link to="about" className='text-white' spy={true} smooth={true}>About</Link>
                                </li>
                                <li className='uk-hidden@m custom_nav_menu'>
                                    <Link to="service" className='text-white' spy={true} smooth={true}>Service</Link>
                                </li>
                                <li className='uk-hidden@m custom_nav_menu'>
                                    <Link to="contact" className='text-white' spy={true} smooth={true}>Testimonials</Link>
                                </li>
                                <li className='uk-hidden@m custom_nav_menu'>
                                    <Link to="footer" className='text-white' spy={true} smooth={true}>Contact</Link>
                                </li>
                            </ul>    
                        </div>
                    </div>                    
                </ul>
            </div>
        </nav>
        <button
            onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
            style={{
            position: 'fixed',
            padding: '9px 9px',
            fontSize: '2rem !important',
            bottom: '5px',
            right: '20px',
            background: 'linear-gradient(50deg, #f05a28 10%, #3474eb 100%)',
            color: 'rgb(194 24 76)',
            textAlign: 'center',
            zIndex: '9999',
            border: 'none',
            borderRadius: '5px',
            }}
        >
            <img src="https://img.icons8.com/ios-filled/25/FFFFFF/login-rounded-up.png" alt='scrolltop'/>
        </button>
        <a href="https://api.whatsapp.com/send/?phone=918248725207&amp;text=Hi," target="_blank" rel="noreferrer noopener">
            <img className='chatbots' src={ Images.Chatbot } alt="chatbot"/>
        </a>
    </div>
  )
}

export default navbar