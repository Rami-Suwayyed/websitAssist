import React from 'react';
import Link from 'next/link';

const FeaturedServices = () => {
    return (
        <div className="featured-services-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-services-item">
                            <div className="icon">
                                <img src="/img/icons/icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Online</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/service-details">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Read More <span></span>
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/img/services/service-shape3.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-services-item">
                            <div className="icon">
                                <img src="/img/icons/icon2.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>In-person</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/service-details">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Read More <span></span>
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/img/services/service-shape3.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-featured-services-item">
                            <div className="icon">
                                <img src="/img/icons/icon3.png" alt="image" />
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Business</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/service-details">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Read More <span></span>
                                </a>
                            </Link>

                            <div className="shape">
                                <img src="/img/services/service-shape3.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedServices;