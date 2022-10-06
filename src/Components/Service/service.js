import React from 'react';
import './service.css';
import Images from '../../Constant/asset';

function service() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
          <h1 className='custom_heading'>Services</h1>
          <div data-uk-slider="autoplay: true; finite: false;">
            <div className="uk-position-relative uk-visible-toggle" tabindex="-1">
                <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-grid-small" data-uk-grid>
                  <li>
                    <div>
                      <div className="uk-card uk-card-default custom-card-border">
                        <div className="uk-card-media-top">
                          <img src={ Images.CLOUD}  alt=""/>
                        </div>
                        <div className="uk-card-body uk-text-center">
                          <h3 className='text-black'>
                            Cloud storage Technology
                          </h3>
                          <a className=''href='/#'>
                            <button className="learn-more" data-uk-toggle="target: #modal-cloud">
                              <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                              </span>
                              <span className="button-text">Learn More</span>
                            </button>
                          </a>
                          <div id="modal-cloud" data-uk-modal>
                              <div class="uk-modal-dialog uk-modal-body">
                                  <button class="uk-modal-close-outside" type="button" data-uk-close></button>
                                  <h2 class="uk-modal-title">Cloud Storage Technology</h2>
                                  <p>
                                  Cloud storage is a cloud computing model that stores data on the Internet through a cloud computing provider who manages and operates data storage as a service. It’s delivered on demand with just-in-time capacity and costs, and eliminates buying and managing your own data storage infrastructure. 
                                  </p>
                                  <h3 className='uk-margin-small'>
                                  Benefits of Cloud Computing
                                  </h3>
                                  <p>
                                  The potential for cost saving is the major reason of cloud services adoption by many organizations. Cloud computing gives the freedom to use services as per the requirement and pay only for what you use. Due to cloud computing it has become possible to run IT operations as a outsourced unit without much in-house resources.
                                  </p>
                                  <p>
                                  Some examples of Cloud computing applications: Health Care, Education, Big data Analytics, Business Process etc.,
                                  </p>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="uk-card uk-card-default custom-card-border">
                        <div className="uk-card-media-top">
                          <img src={ Images.GENERATION} alt=""/>
                        </div>
                        <div className="uk-card-body uk-text-center">
                          <h3 className='text-black'>
                            5 Generation Technology
                          </h3>
                          <a className=''href='/#'>
                            <button className="learn-more" data-uk-toggle="target: #modal-generation">
                              <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                              </span>
                              <span className="button-text">Learn More</span>
                            </button>
                          </a>
                          <div id="modal-generation" data-uk-modal>
                              <div class="uk-modal-dialog uk-modal-body">
                                  <button class="uk-modal-close-outside" type="button" data-uk-close></button>
                                  <h2 class="uk-modal-title">5 Generation Technology</h2>
                                  <p>
                                  5G is based on OFDM (Orthogonal frequency-division multiplexing), a method of modulating a digital signal across several different channels to reduce interference. 5G uses 5G NR air interface alongside OFDM principles. 5G also uses wider bandwidth technologies such as sub-6 GHz and mmWave. 
                                  </p>
                                  <h3 className='uk-margin-small'>
                                  Applications of 5G Technology
                                  </h3>
                                  <p>
                                  5G technology is adorned with many as well as distinct features, which applicability is useful for a wide range people irrespective of their purposes.Some of the significant applications are −
                                  </p>
                                  <ul className='uk-list uk-list-hyphen'>
                                    <li>
                                    Network availability will be everywhere and will facilitate people to use their computer and such kind of mobile devices anywhere anytime. 
                                    </li>
                                    <li>
                                    Because of the IPv6 technology, visiting care of mobile IP address will be assigned as per the connected network and geographical position. 
                                    </li>
                                    <li>
                                    Its application will make world real Wi Fi zone. Its cognitive radio technology will facilitate different version of radio technologies to share the same spectrum efficiently.
                                    </li>
                                  </ul>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="uk-card uk-card-default custom-card-border">
                        <div className="uk-card-media-top">
                          <img src={Images.OPEN_LAB} alt=""/>
                        </div>
                        <div className="uk-card-body uk-text-center">
                          <h3 className='text-black'>
                            Open Lab Technology
                          </h3>
                          <a className=''href='/#'>
                            <button className="learn-more" data-uk-toggle="target: #modal-lab">
                              <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                              </span>
                              <span className="button-text">Learn More</span>
                            </button>
                          </a>
                          <div id="modal-lab" data-uk-modal>
                              <div class="uk-modal-dialog uk-modal-body">
                                  <button class="uk-modal-close-outside" type="button" data-uk-close></button>
                                  <h2 class="uk-modal-title">Open Lab Technology</h2>
                                  <p>
                                  OpenLab CDS is a chromatography data system that combines productivity, usability, and data integrity. With a single user interface you can control your Agilent LC, GC, single quadrupole LC/MS, and GC/MS, as well as other vendors’ instruments in the lab, to streamline training and support.
                                  </p>
                                  <p>
                                  Built-in tools provide time-saving steps in the analysis, interpretation, and reporting workflows while technical controls ensure work quality, effective records management, and enhanced data security. OpenLab CDS is ideal for analytical labs that need the highest level of data integrity.
                                  </p>
                                  <h3 className='uk-margin-small'>
                                  Features of Open Lab
                                  </h3>
                                  <ul className='uk-list uk-list-hyphen'>
                                    <li>
                                    Multi-vendor instrument control – Offers the most comprehensive Agilent and non-Agilent instrument control of your LC, GC, LC/MS, GC/MS systems.
                                    </li>
                                    <li>
                                    Meeting data integrity standards - Provides the technical controls to securely acquire, process, report and store data in laboratories that must follow the compliance guidelines of FDA 21 CFR Part 11, EU Annex 11, GAMP5 as well as ISO/IEC 17025 and EPA’s 40 CFR Part 160.
                                    </li>
                                    <li>
                                    Custom calculations and reporting – Automate calculations and reduce manual tasks to ensure quality and accuracy. Intuitive functionality makes report generation fast and easy.
                                    </li>
                                <li>
                                Automated qualification tool – Perform software qualification and verification tasks to ensure your software is operating as intended.
                                </li>
                              </ul>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="uk-card uk-card-default custom-card-border">
                        <div className="uk-card-media-top">
                          <img src={Images.INDUSTRY} alt=""/>
                        </div>
                        <div className="uk-card-body uk-text-center">
                          <h3 className='text-black'>
                            Industry Automation
                          </h3> 
                          <a className=''href='/#'>
                            <button className="learn-more" data-uk-toggle="target: #modal-industry">
                              <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                              </span>
                              <span className="button-text">Learn More</span>
                            </button>
                          </a>
                          <div id="modal-industry" data-uk-modal>
                              <div class="uk-modal-dialog uk-modal-body">
                                  <button class="uk-modal-close-outside" type="button" data-uk-close></button>
                                  <h2 class="uk-modal-title">Industry Automation</h2>
                                  <p>
                                  Automation takes a step further mechanization that uses a particular machinery mechanism aided human operators for performing a task. Mechanization is the manual operation of a task using powered machinery that depends on human decision making.
                                  </p>
                                  <p>
                                  On the other hand, automation replaces the human involvement with the use of logical programming commands and powerful machineries.
                                  </p>
                                  <h3 className='uk-margin-small'>
                                  Scope of Industry Automation
                                  </h3>
                                  <ul className='uk-list uk-list-hyphen'>
                                    <li>
                                    The future scope of Industrial Automation also aims to eliminate the redundant and hazardous job roles by outsourcing the same to a machine. Hence, this enhances the quality of work by not only reducing errors but also improving productivity and mitigating costs.
                                    </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="uk-card uk-card-default custom-card-border">
                        <div className="uk-card-media-top">
                          <img src={Images.OPEN_SOURCE} alt=""/>
                        </div>
                        <div className="uk-card-body uk-text-center">
                          <h3 className='text-black'>
                            Open Source Software
                          </h3>
                          <a className=''href='/#'>
                            <button className="learn-more" data-uk-toggle="target: #modal-sources">
                              <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                              </span>
                              <span className="button-text">Learn More</span>
                            </button>
                          </a>
                          <div id="modal-sources" data-uk-modal>
                            <div class="uk-modal-dialog uk-modal-body">
                              <button class="uk-modal-close-outside" type="button" data-uk-close></button>
                              <h2 class="uk-modal-title">Open Sources Software</h2>
                              <p>
                              Open source refers to a software program or platform with source code that is readily accessible and which can be modified or enhanced by anyone. Open source access grants users of an application permission to fix broken links, enhance the design, or improve the original code.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
            </div>
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
          </div>     
        </div>
    </div>
  )
}

export default service