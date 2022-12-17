import React from 'react';
import './test.css';
import ContactForm from '../form/form';
function test() {
  return (
    <div className='uk-section'>
        <div className='uk-container'>
            <h1 className='custom_heading'>
                Contact Us
            </h1>
            <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                    <ContactForm/>
                </div>
                <div>
                    <div className="uk-card">
                        <img src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=740&t=st=1671256967~exp=1671257567~hmac=fca0fa5d880480606163c6272507eb73bf206261f1b7563dd4ee7bedfc19a9d9"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default test