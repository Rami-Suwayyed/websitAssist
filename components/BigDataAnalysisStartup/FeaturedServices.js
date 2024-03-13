import React from 'react';
import Link from 'next/link';

const FeaturedServices = () => {
    return (
        <section className="featured-services-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>How We Take Your Business From Good To Great</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-services-box">
                            <div className="icon">
                                <i className="flaticon-analysis"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Analyze Your Data Needs</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    <i className="flaticon-right"></i> Read More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-featured-services-box">
                            <div className="icon">
                                <i className="flaticon-structure"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Develop A Customized Plan</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <Link href="/service-details">
                                <a className="read-more-btn">
                                    <i className="flaticon-right"></i> Read More
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-featured-services-box">
                            <div className="icon">
                                <i className="flaticon-idea"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Implement Your Solution</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
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

export default FeaturedServices;