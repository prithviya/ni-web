import React from 'react';
import './product.css';
import Images from '../../Constant/asset';

function product() {
  return (
    <div className='uk-container'>
        <div className='custom-sect-prod'>
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slider='autoplay: true; finite: false'>
                <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid">
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
                                        <p className='text-white'>Cloud Computing that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service.</p>
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
                                        <p className='text-white'>Integrating new technologies, including Internet of Things (IoT), Cloud Computing and Analytics, AI and Machine Learning into production facilities and operations. </p>
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
                                        <p className='text-white'>OpenLab, Combining device OS, programmable forwarding planes, network OS & new SDN/NFV, VNF orchestration software systems to accelerate the deployment.</p>
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