import React from 'react';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Link from 'next/link';

const MainBanner = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className="banner-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="banner-content">
                                <h1 
                                    className="
                                        animate__animated 
                                        animate__fadeInLeft 
                                        animate__delay-0.1s
                                    "
                                >Data Analytics Consulting Services</h1>
                     
                                <p 
                                    className="
                                        animate__animated 
                                        animate__fadeInLeft 
                                        animate__delay-0.1s
                                    "
                                >World leading reliable research & AI based Data Analytics solutions for Big Data companies and consumer business products. Drive your success without stress!</p>
                            
                                <div className="btn-box animate__animated animate__fadeInRight animate__delay-0.1s">
                                    <Link href="/about-us">
                                        <a className="default-btn">
                                            <i className="flaticon-right"></i> 
                                            About Us <span></span>
                                        </a>
                                    </Link>

                                    <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); openModal()}}
                                            className="video-btn popup-youtube"
                                        > 
                                            <i className="flaticon-google-play"></i> Watch Video
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="banner-animation-image">
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape1.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                             
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape2.png" 
                                    className="animate__animated animate__fadeInUp animate__delay-0.1s"
                                    alt="image" 
                                />
                               
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape3.png" 
                                    className="animate__animated animate__fadeInRight animate__delay-0.1s" 
                                    alt="image" 
                                />
                             
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape4.png" 
                                    className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                    alt="image" 
                                />
                                
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape5.png" 
                                    className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                    alt="image" 
                                />
                               
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape6.png" 
                                    className="animate__animated animate__fadeInLeft animate__delay-0.1s" 
                                    alt="image" 
                                />
                               
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape7.png" 
                                    className="animate__animated animate__fadeInLeft animate__delay-0.1s" 
                                    alt="image" 
                                />
                          
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape8.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                              
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape9.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                             
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape10.png" 
                                    className="animate__animated animate__fadeInRight animate__delay-0.1s" 
                                    alt="image" 
                                />
                              
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape11.png" 
                                    className="animate__animated animate__fadeInLeft animate__delay-0.1s" 
                                    alt="image" 
                                />
                                
                                <img 
                                    src="/img/main-banner/banner-two/banner-two-shape12.png" 
                                    className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                    alt="image" 
                                />
                               
                                <img src="/img/main-banner/banner-two/banner-two-main-img.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner;