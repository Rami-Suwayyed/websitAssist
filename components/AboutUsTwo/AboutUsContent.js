import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src="/img/about/about-img10.png" alt="image" />
                            <div className="shape">
                                <img src="/img/about/about-shape1.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src="/img/star-icon.png" alt="image" /> 
                                
                                </span>
                                <h2>Win a BIGGER Market Share</h2>
                                <p>Are you feeling the pressure of relentless business competition, struggling to carve out your space in a crowded market?</p>
                            
                                <p>You're not alone. In today's cutthroat business landscape, standing out and securing a larger market share is a challenge that keeps many business owners awake at night.</p>
                                <p>The truth is, ignoring the fierce competition means risking stagnation or, worse, losing ground to more assertive rivals.</p>
                                <p>Your potential customers are bombarded with choices every day, and if your brand isn't unmistakably superior, you're at risk of being overlooked.

Picture this: your competitors are out there, actively engaging with your target audience, stealing attention, and grabbing a larger slice of the market pie</p>
                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsContent;