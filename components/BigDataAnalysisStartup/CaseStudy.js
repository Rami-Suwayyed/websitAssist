import React from 'react';
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

const CaseStudy = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="case-study-area bg-fffbf5">
            {display ? <OwlCarousel 
                className="case-study-slides owl-carousel owl-theme"
                {...options}
            > 
                <div className="single-case-study-item ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="case-study-content">
                                    <span className="sub-title">
                                        <img src="/img/star-icon.png" alt="image" /> 
                                        Case study #1
                                    </span>
                                    <h2>Data Science in Pharmaceutical Industries</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                    <Link href="/case-studies-details">
                                        <a className="default-btn">
                                            <i className="flaticon-view"></i>
                                            Details More
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="case-study-image">
                                    <Link href="/case-studies-details">
                                        <a className="d-block">
                                            <img src="/img/case-study/case-study1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="single-case-study-item ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="case-study-content">
                                    <span className="sub-title">
                                        <img src="/img/star-icon.png" alt="image" /> 
                                        Case study #2
                                    </span>
                                    <h2>Mathematics, Advanced Statistics in Python</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                    <Link href="/case-studies-details">
                                        <a className="default-btn">
                                            <i className="flaticon-view"></i>
                                            Details More
                                            <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="case-study-image">
                                    <Link href="/case-studies-details">
                                        <a className="d-block">
                                            <img src="/img/case-study/case-study1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> : ''}
        </div>
    )
}

export default CaseStudy;