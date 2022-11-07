import React from 'react';
import './test.css';
import Testimonial from '../Testimonial/testimonial';
import ContactForm from '../form/form';
function test() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
            <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                    <h1 className='custom_heading'>
                        Contact Us
                    </h1>
                    <ContactForm/>
                </div>
                <div>
                    <h1 className='custom_heading'>
                        Testimonial
                    </h1>
                    <div className="uk-card">
                        <Testimonial/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default test