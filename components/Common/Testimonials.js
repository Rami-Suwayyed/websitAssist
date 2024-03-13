import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-1'></i>",
        "<i class='flaticon-right-1'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 2,
        }
    }
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="testimonials-area bg-23173a ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>What Our Clients are Saying?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                {display ? <OwlCarousel 
                    className="testimonials-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-testimonials-box">
                        <img src="/img/user1.jpg" className="shadow-sm" alt="image" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <div className="client-info">
                            <div className="title">
                                <h3>Alex Maxwell</h3>
                                <span>CEO at EnvyTheme</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-testimonials-box">
                        <img src="/img/user2.jpg" className="shadow-sm" alt="image" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <div className="client-info">
                            <div className="title">
                                <h3>David Warner</h3>
                                <span>CEO at Envato</span>
                            </div>
                        </div>
                    </div>

                    <div className="single-testimonials-box">
                        <img src="/img/user3.jpg" className="shadow-sm" alt="image" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <div className="client-info">
                            <div className="title">
                                <h3>Sarah Taylor</h3>
                                <span>CEO at ThemeForest</span>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}

                <div className="testimonials-view-btn text-center">
                    <Link href="/testimonials">
                        <a className="default-btn">
                            <i className="flaticon-view"></i> 
                            Check Out All Reviews <span></span>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="vector-shape9">
                <img src="/img/shape/vector-shape9.png" alt="image" />
            </div>
            <div className="vector-shape10">
                <img src="/img/shape/vector-shape10.png" alt="image" />
            </div>
        </div>
    )
}

export default Testimonials;