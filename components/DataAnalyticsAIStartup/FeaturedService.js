import React from 'react';
import Link from 'next/link';

const FeaturedService = () => {
    return (
        <div className="boxes-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src="/img/icons/icon1.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details-two">
                                    <a>Marketing Analytics</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

                            <Link href="/service-details-two">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Read More <span></span>
                                </a>
                            </Link>

                            <div className="shape1">
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src="/img/icons/icon2.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details-two">
                                    <a>Consumer Analytics</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            
                            <Link href="/service-details-two">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Read More <span></span>
                                </a>
                            </Link>

                            <div className="shape1">
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
                        <div className="single-boxes-item">
                            <div className="icon">
                                <img src="/img/icons/icon3.png" alt="image" />
                            </div>
                            <h3>
                                <Link href="/service-details-two">
                                    <a>Sales Analytics</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            
                            <Link href="/service-details-two">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> 
                                    Read More <span></span>
                                </a>
                            </Link>

                            <div className="shape1">
                                <img src="/img/services/service-shape2.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedService;