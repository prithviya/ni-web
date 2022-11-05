import React from 'react';
import './apply.css';
import Images from '../../Constant/asset';

function apply() {
  return (
   <div className='uk-section'>
         <div className='uk-container'>
            <div className='uk-child-width-1-3@m uk-grid-collapse uk-grid-match' data-uk-grid>
                <div>
                    <div class="uk-card">
                    <h1 className='custom_heading'>Our <br/>Solutions</h1>
                    <img src={Images.OURSOLUTION}/>
                    </div>
                </div>
                <div class="">
                    <ul class="uk-nav uk-nav-default uk-padding-remove" uk-switcher="connect: #component-nav; animation: uk-animation-fade">
                        <li>
                            <a href="#">
                                <div class='uk-inline custom-sect-bg uk-float-left'>
                                    <img src={Images.OURSTORY} alt='story_logo'/>
                                    <div class="uk-position-bottom-right uk-overlay">
                                        <div class="uk-clearfix">
                                            <div class="uk-float-right">
                                                <div class="uk-card text-white custom-text-bg">Our Story</div>
                                            </div>
                                        </div>                        
                                    </div>
                                </div>    
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class='uk-inline custom-sect-bg uk-float-left'>
                                <img src={Images.STORYLOGO} alt='story_logo'/>
                                    <div class="uk-position-bottom-right uk-overlay">
                                        <div class="uk-clearfix">
                                            <div class="uk-float-right">
                                                <div class="uk-card text-white custom-text-bg">Story of Our Logo</div>
                                            </div>
                                        </div>                        
                                    </div>
                                </div> 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class='uk-inline custom-sect-bg uk-float-left'>
                                    <img src={Images.LEADERSHIP_TEAM} alt='leadership_team'/>
                                    <div class="uk-position-bottom-right uk-overlay">
                                        <div class="uk-clearfix">
                                            <div class="uk-float-right">
                                                <div class="uk-card text-white custom-text-bg">Leadership Team</div>
                                            </div>
                                        </div>                        
                                    </div>
                                </div>     
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="">

                    <ul id="component-nav" class="uk-switcher">
                        <li>
                            <div className='uk-padding-small'>
                                <h3 className='text-blue' style={{fontSize:'1rem'}}>
                                “Change is the only constant” in the world.
                                </h3>
                                <p className='text-black uk-text-justify' style={{fontSize:'0.75rem'}}>
                                To wish to discover the unknown and push your boundaries, indicate change. Accompanying every change, small or big is the exposure to a widened pool of opportunities, and the chance to rejuvenate. The way of perceiving and experiencing life transforms and evolves as technology moves ahead. We keep up the pace to see the wonders unfold and into a world that is redefined. 
                                </p>
                                <p className='text-black uk-text-justify' style={{fontSize:'0.75rem'}}>
                                At Netexa, we are drawn by innovation and discovery – the inquisitiveness to meet the unexplored. We find and build talents that are beneficial to our customers and business. By weeding out limitations, we mark goals that facilitate growth and learning. We devote ourselves to continuous learning and lay out the path that recognizes our assiduity to deliver the best for our customers.
                                </p>
                                <p className='text-black uk-text-justify' style={{fontSize:'0.75rem'}}>
                                To us, this is Redefining Possibilities…
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='uk-padding-small'>
                                <h3 className='text-blue uk-text-justify' style={{fontSize:'1rem'}}>
                                Logo placed as glowing and symbolise the infinity of Redefining Possibilities
                                </h3>
                                <p className='text-black uk-text-justify' style={{fontSize:'0.75rem'}}>
                                In September 2022, following the launch of the website, there arose the need for a new logo.  A logo to symbolize the commendable level of our work. Here’s the new logo created by Soundscapes, which translates into Infinite Opportunities and Redefining Possibilities, and connects to the individuals.
                                </p>
                                <p className='text-black uk-text-justify' style={{fontSize:'0.75rem'}}>
                                Let us join to create harmonious and consistent businesses, industries and institutions around the world. The products and services as per our new logo will be shared soon. 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='uk-padding-small'>
                                <h3 className='text-blue' style={{fontSize:'1rem'}}>
                                Rajarajan V P – Chief Executive Officer, Dr Vanikala - Senior VP & Head – Global Delivery, Chitra K – Senior VP & Head - HR Operations.
                                </h3> 
                                <p className='text-black uk-text-justify' style={{fontSize:'0.75rem'}}>
                                With a master’s degreein Psychology & Human Resources and more than 15 years of quality experience in Recruitment & Client Account Management. In addition to this, expertise in fascinating and hiring amazing talents for Telecommunication, Mobility, Cloud& Technology.
                                </p>
                                <p className='text-black uk-text-justify' style={{fontSize:'0.75rem'}}>
                                As the Head of Operation, I have realized putting multiple brains together, ideas from all ends flow consistently.
                                </p>
                                <p className='text-black uk-text-justify' style={{fontSize:'0.75rem'}}>
                                As an architect in the adjacent industry with resources in multi-vendor sectors and with a great deal of exposure in Communication Service Providers, I am able to fulfil the technological requirements that arise. I strive to expand my abilities and broaden my supporting technology convergence. <i>“We are what we do. Excellence is then not an act but a habit”</i>

                                </p>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
   </div>
  )
}

export default apply