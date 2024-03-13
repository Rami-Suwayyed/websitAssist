import React from 'react';
import Link from 'next/link';

const OurSolutions = () => {
    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        Our Solutions
                    </span>
                    <h2>We Different From Others Should Choose Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Code Security</a>
                                </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>

                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Team Management</a>
                                </Link>
                            </h3>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                            
                            <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>

                            <h3>
                                <Link href="/service-details">
                                    <a>Access Controlled</a>
                                </Link>
                            </h3> 

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                            
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

export default OurSolutions;