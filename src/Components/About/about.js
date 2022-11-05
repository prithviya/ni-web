import React from 'react';
import './about.css';
import Images from '../../Constant/asset';

function about() 
{
  return (
    <div className='uk-section custom-sect-about'>
      <div className='uk-container'>
        <h1 className='uk-margin-remove text-orange'>Life @</h1>
        <h2 className='uk-margin-remove'>Netexa India</h2>
        <div class="uk-grid-collapse uk-visible@m uk-grid-match" data-uk-grid>
          <div className='uk-width-1-2@m'>
            <div uk-slideshow="animation: push; finite: false; autoplay: true; autoplay-interval: 1500;">
              <div class="uk-position-relative uk-visible-toggle" tabindex="-1">
                  <ul class="uk-slideshow-items">
                      <li>
                        <div class="uk-card uk-card-default uk-card-body">
                          <ul className='uk-list uk-list-hyphen'>
                            <h2> 
                              Notable Accomplishments:
                            </h2>
                            <li className='text-black'>
                              Closed full cycle mandates for executive to top leadership positions for the Telecom Sector across the globe.
                            </li>
                            <li className='text-black'>
                              Diversity in hiring enriches the economy and talent pool – Fixed leadership positions with the Women Workforce for IP Network and Cloud Technologies.
                            </li>
                            <li className='text-black'>
                              Fulfilled leadership and technical demands in Analytics Space.
                            </li>
                            <li className='text-black'>
                              Fixed higher roles in AI/ML, and Robotics in a hyper-scale environment for Tier-1, Telco and Enterprises.
                            </li>
                          </ul>              
                        </div>  
                      </li>
                      <li>
                        <div class="uk-card uk-card-default uk-margin-bottom uk-card-body">                          
                            <h2> 
                            Our Impact
                            </h2>
                            <div class="uk-child-width-1-1@m uk-grid-small uk-grid-match" data-uk-grid>
                              <div>
                                  <div class="uk-card">
                                    <ul className=''>
                                      <li className='text-black'>
                                        Client Management: Engaging with top leaders, and business partners to help in hiring the candidate aligned with the client’s demands.
                                      </li>                                      
                                      <li className='text-black'>
                                        Utilizing effective recruitment strategies
                                      </li>
                                      <li className='text-black'>
                                        Create, innovate and implement developmental initiatives
                                      </li>  
                                      <li className='text-black'>
                                        Industry – Institute Connect
                                      </li>
                                      <li className='text-black'>
                                        Strengthening client relationships
                                      </li>  
                                      <li className='text-black'>
                                        Market intellect
                                      </li>
                                      <li className='text-black'>
                                        Upskilling and reskilling
                                      </li>                              
                                    </ul>   
                                  </div>
                              </div>
                              {/* <div>
                                  <div class="uk-card">
                                      <ul>                                        
                                        <li>
                                          Team Mentoring
                                        </li>
                                        <li>
                                          Market intellect
                                        </li>
                                        <li>
                                          Upskilling and reskilling
                                        </li>
                                        <li>
                                          Industry – Institute Connect
                                        </li>
                                        <li>
                                        Strengthening client relationships
                                      </li>
                                      </ul>
                                  </div>
                              </div> */}
                          </div>
                                       
                        </div>  
                      </li>
                  </ul>
              </div>
              <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
            </div>
          </div>
          <div className='uk-width-1-4@m'>
            <div class="uk-card">
              <img src={ Images.LIFEIMG2 }/>
            </div>
          </div>
        </div>
        <div class="uk-grid-collapse uk-grid-match uk-visible@m" data-uk-grid>
          <div className='uk-width-1-2@m'>
            <div class="uk-card">
              <img src={Images.LIFEIMG1} alt='life@netexaimge1'/>
            </div>
          </div>
          <div className='uk-width-1-4@m'>
            <div class="uk-card">
              <img src={Images.DEMO} alt='life@netexaimge2'/>
            </div>
          </div>
        </div>
        <div class="uk-child-width-1-2@m uk-grid-small uk-hidden@m uk-grid-match" data-uk-grid>
          <div>
              <div class="uk-card uk-card-default uk-card-body">
                <h2 className='uk-text-center'> 
                  Notable Accomplishment
                </h2>
                <p className='text-black'>
                  - Closed full cycle mandates for executive to top leadership positions for the Telecom Sector across the globe.
                </p>
                <p className='text-black'>
                  - Diversity in hiring enriches the economy and talent pool – Fixed leadership positions with the Women Workforce for IP Network and Cloud Technologies.
                </p>
                <p className='text-black'>
                  - Fulfilled leadership and technical demands in Analytics Space.
                </p>
                <p className='text-black'>
                  - Fixed higher roles in AI/ML, and Robotics in a hyper-scale environment for Tier-1, Telco and Enterprises.
                </p>
              </div>
          </div>
          <div>
              <div class="uk-card uk-card-secondary uk-card-body">
                <h2 className='uk-text-center'> 
                Our Impact
                </h2>
                <p>
                  - Client Management: Engaging with top leaders, and business partners to help in hiring the candidate aligned with the client’s demands.
                </p>
                <p>
                  - Strengthening client relationships
                </p>
                <p>
                  - Utilizing effective recruitment strategies
                </p>
                <p>
                  - Team Mentoring
                </p>
                <p>
                  - Upskilling and reskilling
                </p>
                <p>
                  - Create, innovate and implement developmental initiatives
                </p>
                <p>
                  - Market intellect
                </p>
                <p>
                  - Industry – Institute Connect
                </p>
              </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default about