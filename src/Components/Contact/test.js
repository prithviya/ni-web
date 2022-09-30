import React from 'react';
import './test.css';
import Testimonial from '../Testimonial/testimonial';

function test() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
            <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                    <h1 className='custom_heading'>
                        Contact Us
                    </h1>
                    <div class="uk-card uk-card-body">
                        <form class="uk-grid-small" data-uk-grid>
                            <div class="uk-width-1-2@m">
                                <div class="uk-margin uk-text-center">
                                    <div class="uk-inline">
                                        <a class="uk-form-icon" href="#" uk-icon="icon: user"></a>
                                        <input class="uk-input" type="text" placeholder='Name'/>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-width-1-2@m uk-text-center">
                                <div class="uk-margin">
                                    <div class="uk-inline">
                                        <a class="uk-form-icon" href="#" uk-icon="icon: mail"></a>
                                        <input class="uk-input" type="text" placeholder='
                                        Email'/>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-width-1-2@m uk-text-center">
                                <div class="uk-margin">
                                    <div class="uk-inline">
                                        <a class="uk-form-icon" href="#" uk-icon="icon: location"></a>
                                        <input class="uk-input" type="text" placeholder='
                                        City'/>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-width-1-2@m uk-text-center">
                                <div class="uk-margin">
                                    <div class="uk-inline">
                                        <a class="uk-form-icon" href="#" uk-icon="icon: phone"></a>
                                        <input class="uk-input" type="text" placeholder='
                                        Phone Number'/>
                                    </div>
                                </div>
                            </div>
                            <div class="uk-width-1-1@m uk-margin">
                                <textarea class="uk-textarea" rows="5" placeholder="Type Something ..."></textarea>
                            </div>
                            <button class="learn-more">
                                <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                                </span>
                                <span class="button-text">Submit</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <h1 className='custom_heading'>
                        Testimonial
                    </h1>
                    <div class="uk-card">
                        <Testimonial/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default test