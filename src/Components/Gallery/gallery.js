import React from 'react';
import './gallery.css';

function gallery() {
  return (
    <div className='uk-section'>
        <div className='uk-container uk-text-center'>
			<h1 className='custom_heading'>Gallery</h1>
			<div class="uk-child-width-1-2@m uk-grid-collapse uk-grid-match" data-uk-grid>
				<div>
				<div class="uk-child-width-1-2@m uk-grid-collapse uk-grid-match" data-uk-grid>
						<div>
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
								<img src="https://images.pexels.com/photos/1181269/pexels-photo-1181269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="1800" height="1200" alt=""/>
								<div class="uk-overlay custom-sect-title uk-padding-small uk-overlay-default uk-position-bottom">
									<p className='text-black'>Node</p>
								</div>
								<div class="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-middle">
									<p class="uk-margin-remove text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
									</p>
								</div>
							</div>
						</div>
						<div>
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
								<img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width="1800" height="1200" alt=""/>
								<div class="uk-overlay custom-sect-title uk-padding-small uk-overlay-default uk-position-bottom">
									<p className='text-black'>SpringBoot</p>
								</div>
								<div class="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-middle">
									<p class="uk-margin-remove text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="uk-card">
						<div data-uk-slideshow="animation: push; autoplay:true; autoplay-interval: 1800; pause-on-hover: true;" className='uk-slideshow'>
							<div tabindex="-1" class="uk-position-relative uk-visible-toggle uk-light">
								<ul class="uk-slideshow-items">
									<li tabindex="-1" class="uk-active uk-transition-active">
											<img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
									<li tabindex="-1" class="uk-active uk-transition-active">
										<img src="https://images.pexels.com/photos/3285203/pexels-photo-3285203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
									<li tabindex="-1" class="uk-active uk-transition-active">
										<img src="https://images.pexels.com/photos/8369218/pexels-photo-8369218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
								</ul>
							</div>
						</div>
					</div>					
				</div>
				<div>
					<div class="uk-card">
						<div data-uk-slideshow="animation: push; autoplay:true; autoplay-interval: 1800; pause-on-hover: true;" className='uk-slideshow'>
							<div tabindex="-1" class="uk-position-relative uk-visible-toggle uk-light">
								<ul class="uk-slideshow-items">
									<li tabindex="-1" class="uk-active uk-transition-active">
											<img src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
									<li tabindex="-1" class="uk-active uk-transition-active">
										<img src="https://images.pexels.com/photos/3285203/pexels-photo-3285203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
									<li tabindex="-1" class="uk-active uk-transition-active">
										<img src="https://images.pexels.com/photos/8369218/pexels-photo-8369218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-uk-img/>
									</li>
								</ul>
							</div>
						</div>							
					</div>
					<div class="uk-child-width-1-2@m uk-grid-collapse uk-grid-match" data-uk-grid>
						<div>
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
								<img src="https://img.freepik.com/premium-photo/young-programmer-working-software-javascript-computer-it-office_229060-189.jpg?w=740" width="1800" height="1200" alt=""/>
								<div class="uk-overlay custom-sect-title uk-padding-small uk-overlay-default uk-position-bottom">
									<p className='text-black'>Django</p>
								</div>
								<div class="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-middle">
									<p class="uk-margin-remove text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
									</p>
								</div>
							</div>
						</div>
						<div>
							<div class="uk-inline-clip uk-transition-toggle" tabindex="0">
								<img src="https://img.freepik.com/free-photo/close-up-man-writing-code-laptop_158595-5169.jpg?w=740&t=st=1661840513~exp=1661841113~hmac=7cd07d545efdfbaa77aa745a45cab1ca9dce88a7ec06060258bf681ede62ab28" width="1800" height="1200" alt=""/>
								<div class="uk-overlay custom-sect-title uk-padding-small uk-overlay-default uk-position-bottom">
									<p className='text-black'>React</p>
								</div>
								<div class="uk-transition-fade uk-position-cover uk-position-small uk-overlay uk-overlay-default uk-flex uk-flex-middle">
									<p class="uk-margin-remove text-black">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
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