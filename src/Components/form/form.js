import React from 'react';
import { useRef as UseRef, useState as UseSate } from "react";
import emailjs from 'emailjs-com';

function form() 
{
  const formRef = UseRef();
  const [done, setDone] = UseSate(false)

  const handleSubmit = (e) =>
    {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_r14g7ug', e.target, 'IrCdGEugp629pWgnT')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div>
        <div className="uk-card uk-card-body">
            <form className="uk-grid-small" id="form" ref={formRef} onSubmit={handleSubmit} data-uk-grid>
                <div className="uk-width-1-2@m">
                    <div className="uk-margin uk-text-center">
                        <div className="uk-inline">
                            <a className="uk-form-icon" href="#/" uk-icon="icon: user"></a>
                            <input className="uk-input" type="text" name='name' placeholder='Name'/>
                        </div>
                    </div>
                </div>
                <div className="uk-width-1-2@m uk-text-center">
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <a className="uk-form-icon" href="#/" uk-icon="icon: mail"></a>
                            <input className="uk-input" type="text" name='email' placeholder='
                            Email'/>
                        </div>
                    </div>
                </div>
                <div className="uk-width-1-2@m uk-text-center">
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <a className="uk-form-icon" href="#/" uk-icon="icon: location"></a>
                            <input className="uk-input" type="text" name='city' placeholder='
                            City'/>
                        </div>
                    </div>
                </div>
                <div className="uk-width-1-2@m uk-text-center">
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <a className="uk-form-icon" href="#/" uk-icon="icon: phone"></a>
                            <input className="uk-input" name='phoneno'  type="text" placeholder='
                            Phone Number'/>
                        </div>
                    </div>
                </div>
                <div className="uk-width-1-1@m uk-margin">
                    <textarea className="uk-textarea" rows="5" name='message' placeholder="Type Something ..."></textarea>
                </div>
                <button className="learn-more" type='submit' value={'send message'}>
                    <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Submit</span>
                </button>
                <div className="clear">
                    {done && <div style={{color: "#fd7e14", marginTop: "15px", fontSize: "18px", textAlign: "center"}}>Thank you</div>}</div>
            </form>
        </div>
    </div>
  )
}

export default form