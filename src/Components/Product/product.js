import React from 'react';
import './product.css';
import Images from '../../Constant/asset';

function product() {
  return (
    <div className='uk-container'>
        <div className='custom-sect-prod'>
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slider='autoplay: true; finite: false'>
                <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
                    <li>
                        <div class="uk-panel">
                            <div class="wrapper">
                                <div class="profile-card js-profile-card">
                                    <div class="profile-card__img">
                                        <img src={Images.FIVE_ICON} alt='5g technology'/>
                                    </div>
                                    <div class="profile-card__cnt js-profile-cnt">
                                        <p className='text-white'>5G is the fifth generation of cellular technology. It is designed to increase speed, reduce latency, and improve flexibility of wireless services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <div class="wrapper">
                                <div class="profile-card js-profile-card">
                                    <div class="profile-card__img">
                                        <img src={Images.CLOUD_ICON} alt='Cloud tech'/>
                                    </div>
                                    <div class="profile-card__cnt js-profile-cnt">
                                        <p className='text-white'>Cloud storage is a cloud computing model that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <div class="wrapper">
                                <div class="profile-card js-profile-card">
                                    <div class="profile-card__img">
                                        <img src={Images.INDUSTRY_ICON} alt='industry icon'/>
                                    </div>
                                    <div class="profile-card__cnt js-profile-cnt">
                                        <p className='text-white'>Industrial automation uses control systems and equipment, such as computer software and robots, to perform tasks that were historically done manually. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <div class="wrapper">
                                <div class="profile-card js-profile-card">
                                    <div class="profile-card__img">
                                        <img src={Images.OS_ICON} alt='open spurce'/>
                                    </div>
                                    <div class="profile-card__cnt js-profile-cnt">
                                        <p className='text-white'>Open source refers to a software program or platform with source code that is readily accessible and which can be modified or enhanced by anyone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <div class="wrapper">
                                <div class="profile-card js-profile-card">
                                    <div class="profile-card__img">
                                        <img src={Images.OPENLAB_ICON} alt='openLab' />
                                    </div>
                                    <div class="profile-card__cnt js-profile-cnt">
                                        <p className='text-white'>OpenLab CDS is a chromatography data system that combines productivity, usability, and data integrity with a single user interface.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default product