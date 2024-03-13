import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="seo-agency-banner">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">SEO Agency</span>
                          
                            <h1
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >Creative & Strategic Digital SEO Agency</h1>
                     
                            <p
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!</p>
                     
                            <div className="btn-box animate__animated animate__fadeInRight animate__delay-0.1s">
                                <Link href="/about-us">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        About Us 
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="banner-wrapper-image animate__animated animate__fadeInUp animate__delay-0.1s">
                            <img src="/img/banner-img2.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;