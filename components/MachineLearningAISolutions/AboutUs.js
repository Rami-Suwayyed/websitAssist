import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const AboutUs = () => {
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

            <div className="about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image-box">
                                <img src="/img/about/about-img9.jpg" alt="image" />
                                
                                <div className="box">
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

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src="/img/star-icon.png" alt="image" /> 
                                        About Us
                                    </span>
                                    <h2>Drive Digital Revolution Through Data Science</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                    
                                    <ul className="features-list">
                                        <li>
                                            <img src="/img/icons/icon4.png" alt="image" />
                                            <h3>10 Years</h3>
                                            <p>On the market</p>
                                        </li>
                                        <li>
                                            <img src="/img/icons/icon5.png" alt="image" />
                                            <h3>45+</h3>
                                            <p>Team members</p>
                                        </li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                    <Link href="/about-us">
                                        <a className="default-btn">
                                            <i className="flaticon-right"></i> 
                                            More About Us <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-shape1">
                    <img src="/img/shape/circle-shape1.png" alt="image" />
                </div>
            </div>
        </>
    )
}

export default AboutUs;