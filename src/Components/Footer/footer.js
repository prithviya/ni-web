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
                            <p className='text-black'>16/1 Chellandiamman Nagar, Singanallur, <br/>Coimbatore-641005</p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-body">
                            <img src="https://img.icons8.com/laces/64/3474eb/whatsapp.png"/>
                            <h3 class="uk-card-title uk-margin">Call us</h3>
                            <p className='text-black'>96946 10272</p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-body">
                            <img src="https://img.icons8.com/laces/64/3474eb/address-book.png"/>
                            <h3 class="uk-card-title uk-margin">Mail us</h3>
                            <p className='text-black'>info@netexa.in</p>
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
                            <p className='text-black'>
                            Netexa is registered with ROC India, Start-up India, and AIC Raise. We operate as the “HUB for Industry and Education”.
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
                                    <a href='https://www.facebook.com/netexaindia/' target={'_blank'}>
                                    <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-facebook-social-media-justicon-flat-justicon.png"/>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://api.whatsapp.com/send/?phone=919694610272&amp;text=Hi,&amp;app_absent=0'>
                                        <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-whatsapp-social-media-justicon-flat-justicon.png"/>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://www.instagram.com/netexa_india/' target={'_blank'}>
                                        <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-instagram-social-media-justicon-flat-justicon.png"/>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://twitter.com/NetexaIndia/'tabIndex={'_blank'}>
                                        <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-twitter-social-media-justicon-flat-justicon.png"/>
                                    </a>
                                </div>
                                <div>
                                    <a>
                                        <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-linkedin-social-media-justicon-flat-justicon.png"/>
                                    </a>
                                </div>
                                <div>
                                    <a href='mailto:info@netexa.in'>
                                        <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-gmail-social-media-justicon-flat-justicon.png"/>
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
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.17240153449524!2d77.022261821217!3d11.00154115915202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8576f6478ffd9%3A0x5ad857aa6a3b0591!2s16%2F1%2C%20Venkata%20Lakshmi%20Nagar%2C%20Chellandy%20Amman%20Nagar%2C%20Singanallur%2C%20Tamil%20Nadu%20641005!5e0!3m2!1sen!2sin!4v1667628627505!5m2!1sen!2sin" width="100%" height="210" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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