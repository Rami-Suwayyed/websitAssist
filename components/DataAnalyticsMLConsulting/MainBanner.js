import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner-area">
            <div className="container">
                <div className="banner-area-content">
                    <h1 
                        className="
                            animate__animated 
                            animate__fadeInLeft 
                            animate__delay-0.1s
                        "
                    >Big Data, AI & ML Consulting!</h1>
             
                    <p 
                        className="
                            animate__animated 
                            animate__fadeInLeft 
                            animate__delay-0.1s
                        "
                    >Get all kinds of hi-tech decesion making consulting services using Artificial Intelligence and Machine Learning from one umbrella.</p>
                 
                    <div className="banner-btn animate__animated animate__fadeInRight animate__delay-0.1s">
                        <Link href="/contact">
                            <a className="default-btn">
                                <i className="flaticon-web"></i> 
                                Work With Us <span></span>
                            </a>
                        </Link>
                    </div>
             
                    <img 
                        src="/img/main-banner/main-pic1.png" 
                        className="animate__animated animate__fadeInUp animate__delay-0.1s"
                        alt="image" 
                    />
                </div>
            </div>
        </div>
    )
}

export default MainBanner;