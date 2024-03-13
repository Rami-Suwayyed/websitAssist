import React from 'react';
import Link from 'next/link';

const OurMission = () => {
    return (
        <section className="our-mission-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src="/img/star-icon.png" alt="image" /> 
                                </span>
                                <h2>How To Succeed in Today’s Competitive Market?</h2>
                                <p>In the quest for an expanded market share, Assistech Comapn introduces the "Solid-Business" Approach...</p>
                                <p>An encompassing strategy aimed at refining every aspect of your enterprise for unparalleled success.</p>
                                <p>From a careful industry analysis aligning your brand seamlessly with market demands to persona-centric campaigns fostering lasting connections, our approach is rooted in personalized, data-driven insights.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-image">
                            <img src="/img/our-mission/our-mission1.png" alt="image" />
                            <div className="shape">
                                <img src="/img/our-mission/our-mission-shape1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMission;