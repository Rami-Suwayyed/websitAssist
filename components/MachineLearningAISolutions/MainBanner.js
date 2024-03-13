import React from 'react';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ]
};

const MainBanner = () => {
    // Popup Video
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    // Owl Carousel
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            {display ? <OwlCarousel 
                className="home-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="main-banner-item item-bg1">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="banner-item-content">
                                    <span className="sub-title">Welcome</span>
                                    <h1>Modern Machine Learning Solutions!</h1>
                                    <p>We add values to our clients business by utilizing our expertise and experience on AI based Machine Learning Soltions. Our learning drives us to success!</p>

                                    <div className="btn-box">
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
                        </div>
                    </div>
                </div>

                <div className="main-banner-item item-bg2">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="banner-item-content">
                                    <span className="sub-title">Welcome</span>
                                    <h1>AI Based Modern Business Solutions</h1>
                                    <p>We think AI can bring the best results for clients business needs. Our SMART decesion making AI algorithm can identify the business needs and offers solutions.</p>
                                    
                                    <div className="btn-box">
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
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </>
    )
}

export default MainBanner;