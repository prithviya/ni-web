import React from 'react';
import './testimonial.css';

function testimonial() {
  return (
    <div className=''>
        <div className=''>
          <div data-uk-slider="autoplay: true; finite: false;">
            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
                <ul className="uk-slider-items">
                  <li>
                    <div>
                        <div className="uk-card uk-card-default custom-card-border">
                            <div className="uk-card-header">
                                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                    <div className="uk-width-auto">
                                        <img className="uk-border-circle" width="60" height="60" src="https://img.freepik.com/premium-psd/3d-cartoon-avatar-smiling-woman_1020-5129.jpg?w=740"/>
                                    </div>
                                    <div className="uk-width-expand">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">Gowtham</h3>
                                        {/* <p className="uk-margin-remove text-pink"><time datetime="2016-04-01T19:00">Dec 21, 2022</time></p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <p className='text-black'>
                                One of the good product-based companies in Coimbatore, which appreciates employees for their efforts, and encourages new skills and abilities. The best place to explore and learn about the platform.
                                </p>
                            </div>
                        </div>
                    </div>
                  </li>
                  <li>
                  <div>
                        <div className="uk-card uk-card-default custom-card-border">
                            <div className="uk-card-header">
                                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                    <div className="uk-width-auto">
                                        <img className="uk-border-circle" width="60" height="60" src="https://img.freepik.com/premium-psd/3d-cartoon-avatar-smiling-woman_1020-5129.jpg?w=740"/>
                                    </div>
                                    <div className="uk-width-expand">
                                        <h3 className="uk-card-title uk-margin-remove-bottom">Prithviya </h3>
                                        {/* <p className="uk-margin-remove text-pink"><time datetime="2016-04-01T19:00">Jan 01, 2022</time></p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="uk-card-body">
                                <p className='text-black'>
                                An awarding course! I learnt a lot about IoT and the importance of Cloud Computing with the recent technologies. I think it's a lucrative course for those aspiring for a brighter future.
                                </p>
                            </div>
                        </div>
                    </div>
                  </li>
                </ul>
                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#/" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#/" data-uk-slidenav-next data-uk-slider-item="next"></a>

            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
          </div>
        </div>
    </div>
  )
}

export default testimonial