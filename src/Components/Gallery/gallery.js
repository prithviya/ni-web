import React from 'react';
import './gallery.css';

function gallery() {
  return (
    <div className='uk-section'>
        <div className='uk-container uk-text-center'>
			<h1 className='custom_heading'>Gallery</h1>
			<div className="uk-child-width-1-2@m uk-grid-collapse uk-grid-match" data-uk-grid>
				<div>
				<div className="uk-child-width-1-2@m uk-grid-collapse uk-grid-match" data-uk-grid>
						<div>
							<div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
								<img src="https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="1800" height="1200" alt=""/>
								<div className="uk-overlay custom-sect-title uk-padding-small uk-overlay-default uk-position-bottom">
									<p className='text-black'>Openstack</p>
								</div>
								<div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-middle">
									<p className="uk-margin-remove text-black">
									OpenStack is an open source platform that uses pooled virtual resources to build and manage private and public clouds.
									</p>
								</div>
							</div>
						</div>
						<div>
							<div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
								<img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="1800" height="1200" alt=""/>
								<div className="uk-overlay custom-sect-title uk-padding-small uk-overlay-default uk-position-bottom">
									<p className='text-black'>VNF</p>
								</div>
								<div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-middle">
									<p className="uk-margin-remove text-black">
									Virtualized network services running on open computing platforms formerly carried out by proprietary hardware technology.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="uk-card">
						<div data-uk-slideshow="animation: push; autoplay:true; autoplay-interval: 1800; pause-on-hover: true;" className='uk-slideshow'>
							<div tabIndex="-1" className="uk-position-relative uk-visible-toggle uk-light">
								<ul className="uk-slideshow-items">
									<li tabIndex="-1" className="uk-active uk-transition-active">
											<img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
									<li tabIndex="-1" className="uk-active uk-transition-active">
										<img src="https://images.pexels.com/photos/3285203/pexels-photo-3285203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
									<li tabIndex="-1" className="uk-active uk-transition-active">
										<img src="https://images.pexels.com/photos/8369218/pexels-photo-8369218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
								</ul>
							</div>
						</div>
					</div>					
				</div>
				<div>
					<div className="uk-card">
						<div data-uk-slideshow="animation: push; autoplay:true; autoplay-interval: 1800; pause-on-hover: true;" className='uk-slideshow'>
							<div tabIndex="-1" className="uk-position-relative uk-visible-toggle uk-light">
								<ul className="uk-slideshow-items">
									<li tabIndex="-1" className="uk-active uk-transition-active">
											<img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
									<li tabIndex="-1" className="uk-active uk-transition-active">
										<img src="https://images.pexels.com/photos/3285203/pexels-photo-3285203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
									<li tabIndex="-1" className="uk-active uk-transition-active">
										<img src="https://images.pexels.com/photos/8369218/pexels-photo-8369218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
								</ul>
							</div>
						</div>							
					</div>
					<div className="uk-child-width-1-2@m uk-grid-collapse uk-grid-match" data-uk-grid>
						<div>
							<div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
								<img src="https://img.freepik.com/premium-photo/young-programmer-working-software-javascript-computer-it-office_229060-189.jpg?w=740" width="1800" height="1200" alt=""/>
								<div className="uk-overlay custom-sect-title uk-padding-small uk-overlay-default uk-position-bottom">
									<p className='text-black'>SDN</p>
								</div>
								<div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-middle">
									<p className="uk-margin-remove text-black">
									An approach to network management that enables programmatically efficient network configuration to improve network performance and monitoring.
									</p>
								</div>
							</div>
						</div>
						<div>
							<div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
								<img src="https://img.freepik.com/free-photo/close-up-man-writing-code-laptop_158595-5169.jpg?w=740&t=st=1661840513~exp=1661841113~hmac=7cd07d545efdfbaa77aa745a45cab1ca9dce88a7ec06060258bf681ede62ab28" width="1800" height="1200" alt=""/>
								<div className="uk-overlay custom-sect-title uk-padding-small uk-overlay-default uk-position-bottom">
									<p className='text-black'>Kubernetes</p>
								</div>
								<div className="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-middle">
									<p className="uk-margin-remove text-black">
									Kubernetes, or k8s, is an open source platform that automates Linux container operations. 
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    </div>
  )
}

export default gallery