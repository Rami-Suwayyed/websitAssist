import React from 'react';
import Link from 'next/link';

const TeamMembers = () => {
    return (
        <div className="scientist-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12">
                        <div className="scientist-box-list">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6 offset-lg-1">
                                    <div className="single-scientist-item">
                                        <img src="/img/scientist/scientist9.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <div className="single-scientist-item">
                                        <img src="/img/scientist/scientist10.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-12 col-md-6 offset-lg-0 offset-md-3">
                                    <div className="single-scientist-item">
                                        <img src="/img/scientist/scientist11.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="map-shape1">
                                <img src="/img/shape/map-shape1.png" alt="image" />
                            </div>
                            <div className="vector-shape5">
                                <img src="/img/shape/vector-shape5.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="scientist-section-title">
                            <span className="sub-title">
                                <img src="/img/star-icon.png" alt="image" /> 
                                Our Team
                            </span>
                            <h2>Meet Our Data Scientist Preparing For Your Business Success</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <Link href="/team">
                                <a className="default-btn">
                                    <i className="flaticon-view"></i>
                                    View Our Team <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape4">
                <img src="/img/shape/vector-shape4.png" alt="image" />
            </div>
        </div>
    )
}

export default TeamMembers;