import React from 'react';
import Testimonial from '../Testimonial/testimonial';

function faq() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
            
            <div class="uk-child-width-1-2@s uk-grid-match" data-uk-grid>
                <div>
                    <div class="uk-card uk-card-body">
                    <h1 className='custom_heading'>
                        Testimonial
                    </h1>
                        <Testimonial/>
                    </div>
                </div>
                <div>
                    <div class="uk-card uk-card-body">
                        <h1 className='custom_heading'>
                            Career
                        </h1>
                        <ul data-uk-accordion="collapsible: false">
                            <li class="uk-open">
                                <a class="uk-accordion-title" href="#">CM - Build & Release Engineer -With android Background</a>
                                <div class="uk-accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">Protocol Stack Modem Development</a>
                                <div class="uk-accordion-content">
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">Android Frame Work Dev</a>
                                <div class="uk-accordion-content">
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                            </li>
                            <li>
                                <a class="uk-accordion-title" href="#">Android Multimedia (Audio, Video & camera etc.)</a>
                                <div class="uk-accordion-content">
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                </div>
                            </li>
                            {/* <li>
                                <a class="uk-accordion-title" href="#">Item 5</a>
                                <div class="uk-accordion-content">
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default faq