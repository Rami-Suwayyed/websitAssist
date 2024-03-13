import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area pb-100">
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
                                    About Us
                                </span>
                                <h2>Business Analytics For Data-Driven Solutions</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Big Data
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Data Visualization
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Data Warehousing
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Data Management
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Business Intelligence
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Business Intelligence
                                        <img src="/img/our-mission/our-mission-shape2.png" alt="image" />
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                <Link href="/about-us-two">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        More About Us <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;