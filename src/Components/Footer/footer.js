import React from 'react';
import './footer.css';
import Images from'../../Constant/asset'; 
import { Link } from "react-scroll";

function footer() {
  return (
    <div>
        <div className='uk-section'> 
            <div className='uk-container'>
                <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-body">
                        <img src="https://img.icons8.com/laces/64/3474eb/address.png" alt='location'/>
                            <h3 className="uk-card-title uk-margin">Find us</h3>
                            <p className='text-black'>AIC RAISE Startup Incubation Center, <br/>Rathinam Techzone, Eachanari<br/>Coimbatore</p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-body">
                            <img src="https://img.icons8.com/laces/64/3474eb/whatsapp.png" alt='call us'/>
                            <h3 className="uk-card-title uk-margin">Call us</h3>
                            <p className='text-black'>8248725207</p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-body">
                            <img src="https://img.icons8.com/laces/64/3474eb/address-book.png" alt='mail'/>
                            <h3 className="uk-card-title uk-margin">Mail us</h3>
                            <p className='text-black'>info@netexa.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='uk-section uk-section-muted uk-padding-remove-bottom'>
            <div className='uk-container'>
                <div className="uk-child-width-1-4@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-body">
                            <img className='' src={ Images.BRAND_LOGO } alt='logo' width={'100%'} height={'100%'} />
                            <p className='text-black'>
                            Netexa is registered with ROC India, Start-up India, and AIC Raise. We operate as the “HUB for Industry and Education”.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-body">
                            <h3 className="uk-card-title uk-margin uk-text-center">Useful Links</h3>
                            <ul className='uk-list uk-text-center'>
                                <li className='custom-footer-nav'>
                                    <Link className='' to="home" spy={true} smooth={true}>Home</Link>
                                </li>
                                <li className='custom-footer-nav'>
                                    <Link to="about" spy={true} smooth={true}>
                                        About
                                    </Link>
                                </li>
                                <li className='custom-footer-nav'>
                                    <Link to='service' spy={true} smooth={true}>
                                        Services
                                    </Link>
                                </li>
                                <li className='custom-footer-nav'>
                                    <Link to='career' spy={true} smooth={true}>
                                        Career
                                    </Link>
                                </li>
                                <li className='custom-footer-nav'>
                                    <Link to='contact' spy={true} smooth={true}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-body">
                            <h3 className="uk-card-title uk-margin uk-text-center">
                                Social Media
                            </h3>
                            <div className='uk-child-width-1-2 uk-text-center'data-uk-grid>
                                <div>
                                    <a href='https://www.facebook.com/netexaindia/' target={'_blank'} rel="noreferrer noopener" >
                                    <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-facebook-social-media-justicon-flat-justicon.png" alt='fb'/>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://api.whatsapp.com/send/?phone=918248725207&amp;text=Hi,&amp;app_absent=0' target={'_blank'} rel="noreferrer noopener" >
                                        <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-whatsapp-social-media-justicon-flat-justicon.png" alt='whatsapp'/>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://www.instagram.com/netexa_india/' target={'_blank'} rel="noreferrer noopener" >
                                        <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-instagram-social-media-justicon-flat-justicon.png" alt='insta'/>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://twitter.com/NetexaIndia/' target={'_blank'} rel="noreferrer noopener" >
                                        <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-twitter-social-media-justicon-flat-justicon.png" alt='twitter'/>
                                    </a>
                                </div>
                                <div>
                                    <a href='#/' rel="noreferrer noopener" >
                                        <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-linkedin-social-media-justicon-flat-justicon.png" alt='linkedin'/>
                                    </a>
                                </div>
                                <div>
                                    <a href='mailto:info@netexa.in' target={'_blank'} rel="noreferrer noopener" >
                                        <img src="https://img.icons8.com/external-justicon-flat-justicon/40/null/external-gmail-social-media-justicon-flat-justicon.png" alt='mail'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-body">
                            <h3 className="uk-card-title uk-margin">
                                Location
                            </h3>
                            <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4635496128876!2d76.96951871428807!3d10.928314159361229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b1072f0a6a7%3A0x40c812a7d5394fdf!2sAIC%20RAISE%20Startup%20Incubation%20Center!5e0!3m2!1sen!2sin!4v1667801258553!5m2!1sen!2sin" width="100%" height="210" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='uk-margin-remove'/>
            <p className='uk-padding-small uk-margin-remove uk-text-center text-black'>
                2022 © Copyright. All Rights Reserved
            </p>
        </div>
    </div>
  )
}

export default footer