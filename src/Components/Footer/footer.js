import React from 'react';
import './footer.css';
import Images from'../../Constant/asset'; 
import { Link } from "react-scroll";

function footer() {
  return (
    <div>
        <div className='uk-section'> 
            <div className='uk-container'>
                <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div class="uk-card uk-card-body">
                        <img src="https://img.icons8.com/laces/64/3474eb/address.png"/>
                            <h3 class="uk-card-title uk-margin">Find us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-body">
                            <img src="https://img.icons8.com/laces/64/3474eb/whatsapp.png"/>
                            <h3 class="uk-card-title uk-margin">Call us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-body">
                            <img src="https://img.icons8.com/laces/64/3474eb/address-book.png"/>
                            <h3 class="uk-card-title uk-margin">Mail us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='uk-section uk-section-muted uk-padding-remove-bottom'>
            <div className='uk-container'>
                <div class="uk-child-width-1-4@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div class="uk-card uk-card-body">
                            <img className='' src={ Images.BRAND_LOGO } width={'100%'} height={'100%'} />
                            <p>
                            Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut dolor sit amet.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-body">
                            <h3 class="uk-card-title uk-margin uk-text-center">Useful Links</h3>
                            <ul className='uk-list uk-text-center'>
                                <li className='custom-footer-nav'>
                                    <Link className='' to="home" spy={true} smooth={true}>Home</Link>
                                </li>
                                <li className='custom-footer-nav'>
                                    <a>
                                        About Us
                                    </a>
                                </li>
                                <li className='custom-footer-nav'>
                                    <a>
                                        Services
                                    </a>
                                </li>
                                <li className='custom-footer-nav'>
                                    <a>
                                        Testimonial
                                    </a>
                                </li>
                                <li className='custom-footer-nav'>
                                    <a>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-body">
                            <h3 class="uk-card-title uk-margin uk-text-center">
                                Social Media
                            </h3>
                            <div className='uk-child-width-1-2 uk-text-center'data-uk-grid>
                                <div>
                                    <a>
                                        <img src="https://img.icons8.com/laces/40/3474eb/facebook-new.png"/>
                                    </a>
                                </div>
                                <div>
                                    <a>
                                    <img src="https://img.icons8.com/laces/40/3474eb/whatsapp.png"/>
                                    </a>
                                </div>
                                <div>
                                    <a>
                                        <img src="https://img.icons8.com/laces/40/3474eb/instagram-new.png"/>
                                    </a>
                                </div>
                                <div>
                                    <a>
                                        <img src="https://img.icons8.com/laces/40/3474eb/twitter.png"/>
                                    </a>
                                </div>
                                <div>
                                    <a>
                                        <img src="https://img.icons8.com/laces/40/3474eb/youtube-play.png"/>
                                    </a>
                                </div>
                                <div>
                                    <a>
                                    <img src="https://img.icons8.com/laces/40/3474eb/mail-network.png"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-body">
                            <h3 class="uk-card-title uk-margin">
                                Location
                            </h3>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4635496128876!2d76.96951871428803!3d10.928314159361229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b1072f0a6a7%3A0x40c812a7d5394fdf!2sAIC%20RAISE%20Startup%20Incubation%20Center!5e0!3m2!1sen!2sin!4v1661764500166!5m2!1sen!2sin" width="100%" height="210" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='uk-margin-remove'/>
            <p className='uk-margin-small uk-text-center'>
                2022 © Copyright. All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default footer