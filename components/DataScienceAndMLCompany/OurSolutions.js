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
                    <h2>One-Stop Solution For Business Accelerating</h2>
                    <p>To Save money and time, and get a consistent quality of work with less headache.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Business Improvement</a>
                                </Link>
                            </h3>
                            <p>Unlock the full potential of your business with our dedicated Business Improvement solution. Our expert consultants work closely with you to identify inefficiencies, streamline processes, and implement strategies for enhanced productivity and profitability.</p>

                            {/* <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Marketing Systems</a>
                                </Link>
                            </h3>
                            <p>Navigate the dynamic landscape of modern business with confidence through our advanced Marketing Systems. Tailored to meet your unique needs, our systems leverage the latest technologies and data-driven insights.</p>
                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>Branding and Design</a>
                                </Link>
                            </h3>
                            <p>Leave a lasting impression with our exceptional Branding and Design solutions. Our creative team brings your brand to life, crafting compelling visual identities that resonate with your target audience. Whether it's a brand refresh, logo design, or complete visual overhaul, we ensure your brand stands out in a crowded market.</p>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSolutions;