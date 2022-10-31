import React from 'react';
import './choose.css';

function choose() {
  return (
    <div className='uk-section'>
        <div className='uk-container'>
            <h1 className='custom_heading'>Why choose Us?</h1>
            <div class="uk-child-width-1-4@m uk-grid-small uk-text-center uk-grid-match" data-uk-grid>
                <div>
                    <div class="uk-card">
                      <div class="service-box">
                          <div class="service-icon yellow">
                              <div class="front-content">
                              <img src="https://img.icons8.com/ios/60/f05a28/react-native--v1.png"/>
                                  <h3 className='uk-card-title'>
                                  IoT
                                  </h3>
                              </div>
                          </div>
                          <div class="service-content">
                              <h3>IoT</h3>
                              <p>
                              Describes physical objects with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the internet or other communication networks.
                              </p>
                          </div>
                      </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card">
                      <div class="service-box">
                          <div class="service-icon yellow">
                              <div class="front-content">
                              <img src="https://img.icons8.com/ios/60/f05a28/ruby-programming-language.png"/>
                                  <h3 className='uk-card-title'>
                                    NFVI – IaaS / CaaS
                                  </h3>
                              </div>
                          </div>
                          <div class="service-content">
                              <h3>IaaS / Caas</h3>
                              <p>
                              NFVI enables  to deploy virtual network functions (VNFs) or cloud native functions (CNFs) from multiple vendors, as well as OSS and BSS applications, with speed while keeping total cost of ownership low
                              </p>
                          </div>
                      </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card">
                      <div class="service-box">
                          <div class="service-icon yellow">
                              <div class="front-content">
                              <img src="https://img.icons8.com/ios/60/f05a28/python--v1.png"/>
                                  <h3 className='uk-card-title'>
                                  SDN/NFV
                                  </h3>
                              </div>
                          </div>
                          <div class="service-content">
                              <h3>SDN/NFV</h3>
                              <p>
                              An approach to network management that enables dynamic, programmatically efficient network configuration to improve network performance and monitoring,  like cloud computing than traditional network management.
                              </p>
                          </div>
                      </div>
                    </div>
                </div>
                <div>
                    <div class="uk-card">
                      <div class="service-box">
                          <div class="service-icon yellow">
                              <div class="front-content">
                              <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/f05a28/external-coding-internet-technology-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
                                  <h3 className='uk-card-title'>
                                  Hyper Scaler 
                                  </h3>
                              </div>
                          </div>
                          <div class="service-content">
                              <h3>Hyper Scaler </h3>
                              <p>
                              AWS/Azure/GCP - A complete mix of hardware and facilities that can scale a distributed computing environment up to thousands of servers.
                              </p>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default choose