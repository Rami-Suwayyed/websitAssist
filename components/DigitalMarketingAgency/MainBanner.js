import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="digital-agency-banner">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <span className="sub-title">Digital Marketing</span>
                      
                            <h1 
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >Digital Agency with Excellence Service</h1>
                         
                            <p
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!</p>
                         
                            <div className="btn-box animate__animated animate__fadeInRight animate__delay-0.1s">
                                <Link href="/about-us-two">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        About Us 
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-image animate__animated animate__fadeInUp animate__delay-0.1s">
                            <img src="/img/banner-img3.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;