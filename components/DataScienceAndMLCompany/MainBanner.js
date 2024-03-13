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

            <div className="main-banner">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="main-banner-content">
                                <h1 
                                    className="
                                        animate__animated 
                                        animate__fadeInLeft 
                                        animate__delay-0.1s
                                    "
                                >Assisting Your Rise
                                </h1>
                         
                                <p 
                                    className="
                                        animate__animated 
                                        animate__fadeInLeft 
                                        animate__delay-0.1s
                                    "
                                >Assisting Brands To Thrive in Today’s Competitive Market Using The “Solid-Business” Approach</p>
                     
                                <div className="btn-box animate__animated animate__fadeInRight animate__delay-0.1s">
                                  
                                    {/* <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); openModal()}}
                                            className="video-btn popup-youtube"
                                        > 
                                            <i className="flaticon-google-play"></i> Watch Video
                                        </a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="main-banner-animation-image">
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape1.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                         
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape2.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                 
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape3.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                             
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape4.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                       
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape5.png" 
                                    className="animate__animated animate__fadeInUp animate__delay-0.1s" 
                                    alt="image" 
                                />
                          
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape6.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                    
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape7.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                          
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape8.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                             
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape9.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                             
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape10.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                           
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape11.png" 
                                    className="animate__animated animate__fadeInDown animate__delay-0.1s" 
                                    alt="image" 
                                />
                             
                                <img 
                                    src="/img/main-banner/banner-one/banner-one-shape12.png" 
                                    className="animate__animated animate__fadeInLeft animate__delay-0.1s" 
                                    alt="image" 
                                />
                     
                                <img src="/img/main-banner/banner-one/banner-one-main-img.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainBanner;