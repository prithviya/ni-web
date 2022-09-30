import React from 'react';
import './product.css'

function product() {
  return (
    <div className='uk-container'>
        <div className='custom-sect-prod'>
            <div class="uk-child-width-1-3@m uk-grid-small" data-uk-grid>
                <div>
                    <div class="wrapper">
                        <div class="profile-card js-profile-card">
                            <div class="profile-card__img">
                                <img src="https://img.icons8.com/color/48/000000/swift.png"/>
                            </div>
                            <div class="profile-card__cnt js-profile-cnt">
                                <p className='text-white'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="wrapper">
                        <div class="profile-card js-profile-card">
                            <div class="profile-card__img">
                                <img src="https://img.icons8.com/color/48/000000/swift.png"/>
                            </div>
                            <div class="profile-card__cnt js-profile-cnt">
                                <p className='text-white'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="wrapper">
                        <div class="profile-card js-profile-card">
                            <div class="profile-card__img">
                                <img src="https://img.icons8.com/color/48/000000/swift.png"/>
                            </div>
                            <div class="profile-card__cnt js-profile-cnt">
                                <p className='text-white'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default product