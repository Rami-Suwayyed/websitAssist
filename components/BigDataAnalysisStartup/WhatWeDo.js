import React from 'react';
import Link from 'next/link';

const WhatWeDo = () => {
    return (
        <section className="what-we-do-area bg-fafafb pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>What We Do</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-what-we-do-box">
                            <div className="icon">
                                <i className="flaticon-segmentation"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Research</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                            <Link href="/service-details">
                                <a className="link">Market Research <i className="flaticon-right"></i></a>
                            </Link>
                            <Link href="/service-details">
                                <a className="link">Investment Research <i className="flaticon-right"></i></a>
                            </Link>
                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    <i className="flaticon-right"></i> Read More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-what-we-do-box">
                            <div className="icon">
                                <i className="flaticon-analytics"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Analytics</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                            <Link href="/service-details">
                                <a className="link">Data Analytics <i className="flaticon-right"></i></a>
                            </Link>
                            <Link href="/service-details">
                                <a className="link">Business Intelligence <i className="flaticon-right"></i></a>
                            </Link>
                            <Link href="/service-details">
                                <a className="read-more-btn"><i className="flaticon-right"></i>Read More</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-what-we-do-box">
                            <div className="icon">
                                <i className="flaticon-settings"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Technology</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                            <Link href="/service-details">
                                <a className="link">
                                    Intelligence Automation <i className="flaticon-right"></i>
                                </a>
                            </Link>
                            <Link href="/service-details">
                                <a className="link">
                                    Quality Engineering <i className="flaticon-right"></i>
                                </a>
                            </Link>
                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    <i className="flaticon-right"></i> Read More
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;