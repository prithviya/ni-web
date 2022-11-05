import React from 'react';
import './testimonial.css';

function testimonial() {
  return (
    <div className=''>
        <div className=''>
          <div data-uk-slider="autoplay: true; finite: false;">
            <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                <ul class="uk-slider-items">
                  <li>
                    <div>
                        <div class="uk-card uk-card-default custom-card-border">
                            <div class="uk-card-header">
                                <div class="uk-grid-small uk-flex-middle" data-uk-grid>
                                    <div class="uk-width-auto">
                                        <img class="uk-border-circle" width="60" height="60" src="https://img.freepik.com/premium-psd/3d-cartoon-avatar-smiling-woman_1020-5129.jpg?w=740"/>
                                    </div>
                                    <div class="uk-width-expand">
                                        <h3 class="uk-card-title uk-margin-remove-bottom">Gowtham</h3>
                                        {/* <p class="uk-margin-remove text-pink"><time datetime="2016-04-01T19:00">Dec 21, 2022</time></p> */}
                                    </div>
                                </div>
                            </div>
                            <div class="uk-card-body">
                                <p className='text-black'>
                                One of the good product-based companies in Coimbatore, which appreciates employees for their efforts, and encourages new skills and abilities. The best place to explore and learn about the platform.
                                </p>
                            </div>
                        </div>
                    </div>
                  </li>
                  <li>
                  <div>
                        <div class="uk-card uk-card-default custom-card-border">
                            <div class="uk-card-header">
                                <div class="uk-grid-small uk-flex-middle" data-uk-grid>
                                    <div class="uk-width-auto">
                                        <img class="uk-border-circle" width="60" height="60" src="https://img.freepik.com/premium-psd/3d-cartoon-avatar-smiling-woman_1020-5129.jpg?w=740"/>
                                    </div>
                                    <div class="uk-width-expand">
                                        <h3 class="uk-card-title uk-margin-remove-bottom">Prithviya </h3>
                                        {/* <p class="uk-margin-remove text-pink"><time datetime="2016-04-01T19:00">Jan 01, 2022</time></p> */}
                                    </div>
                                </div>
                            </div>
                            <div class="uk-card-body">
                                <p className='text-black'>
                                An awarding course! I learnt a lot about IoT and the importance of Cloud Computing with the recent technologies. I think it's a lucrative course for those aspiring for a brighter future.
                                </p>
                            </div>
                        </div>
                    </div>
                  </li>
                </ul>
                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

            </div>
            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
          </div>
        </div>
    </div>
  )
}

export default testimonial