import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="hero-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="hero-banner-content">
                            <h1 
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >Learn Data Science</h1>
                         
                            <p 
                                className="
                                    animate__animated 
                                    animate__fadeInLeft 
                                    animate__delay-0.1s
                                "
                            >Keeping your skills up to date is essential and learning Data Science including oportunites on Big Data can drive you to become extraordinary professionals.</p>
                         
                            <div className="btn-box animate__animated animate__fadeInRight animate__delay-0.1s">
                                <Link href="/events">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i> 
                                        Explore Bootcamps <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="hero-banner-animation-image">
                            <img 
                                src="/img/main-banner/banner-three/banner-three-shape1.png" 
                                className="animate__animated animate__fadeInLeft animate__delay-0.1s" 
                                alt="image" 
                            />
                      
                            <img 
                                src="/img/main-banner/banner-three/banner-three-shape2.png" 
                                className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                alt="image" 
                            />
                         
                            <img 
                                src="/img/main-banner/banner-three/banner-three-shape3.png" 
                                className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                alt="image" 
                            />
                          
                            <img 
                                src="/img/main-banner/banner-three/banner-three-shape4.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s"
                                alt="image" 
                            />
                          
                            <img 
                                src="/img/main-banner/banner-three/banner-three-shape5.png" 
                                className="animate__animated animate__fadeInLeft animate__delay-0.1s"
                                alt="image" 
                            />
                      
                            <img 
                                src="/img/main-banner/banner-three/banner-three-shape6.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                         
                            <img 
                                src="/img/main-banner/banner-three/banner-three-shape7.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                            
                            <img 
                                src="/img/main-banner/banner-three/banner-three-shape8.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                     
                            <img 
                                src="/img/main-banner/banner-three/banner-three-shape9.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                         
                            <img 
                                src="/img/main-banner/banner-three/banner-three-shape10.png" 
                                className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                alt="image" 
                            />
                          
                            <img 
                                src="/img/main-banner/banner-three/banner-three-main-img.png" 
                                className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                alt="image" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape7">
                <img src="/img/shape/vector-shape7.png" alt="image" />
            </div>
    
            <div className="vector-shape8">
                <img src="/img/shape/vector-shape8.png" alt="image" />
            </div>
        </div>
    )
}

export default MainBanner;