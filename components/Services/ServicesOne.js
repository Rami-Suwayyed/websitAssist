import React from 'react';
import Link from 'next/link';

const ServicesOne = () => {
    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Startup Applications</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>

                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>
   
                            <h3>
                                <Link href="/service-details">
                                    <a>SaaS Solutions</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                            
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>eCommerce Platforms</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                            
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-segmentation"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Research</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                           
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-analytics"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Analytics</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                            
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-settings"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Technology</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.</p>
                            
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesOne;