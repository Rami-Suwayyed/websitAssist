import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="banner-wrapper-content">
                            <h1 
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >Managed Analytics and Data Analysis Platform</h1>
                        
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
                                        About Us <span></span>
                                    </a>
                                </Link>
                                <Link href="/profile-authentication">
                                    <a className="default-btn">
                                        <i className="flaticon-tick"></i> 
                                        Get Started <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="banner-wrapper-animation-image">
                            <img 
                                src="/img/main-banner/banner-four/banner-four-shape1.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                           
                            <img 
                                src="/img/main-banner/banner-four/banner-four-shape2.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                           
                            <img 
                                src="/img/main-banner/banner-four/banner-four-shape3.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                          
                            <img 
                                src="/img/main-banner/banner-four/banner-four-shape4.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                             
                            <img 
                                src="/img/main-banner/banner-four/banner-four-shape5.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                      
                            <img 
                                src="/img/main-banner/banner-four/banner-four-shape6.png" 
                                className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                alt="image" 
                            />
           
                            <img 
                                src="/img/main-banner/banner-four/banner-four-shape7.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                        
                            <img 
                                src="/img/main-banner/banner-four/banner-four-shape8.png" 
                                className="animate__animated animate__fadeInLeft animate__delay-0.1s" 
                                alt="image" 
                            />
                          
                            <img 
                                src="/img/main-banner/banner-four/banner-four-shape9.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                        
                            <img 
                                src="/img/main-banner/banner-four/banner-four-shape10.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                      
                            <img 
                                src="/img/main-banner/banner-four/banner-four-main-img.png" 
                                className="animate__animated animate__fadeInUp animate__delay-0.1s"
                                alt="image" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;