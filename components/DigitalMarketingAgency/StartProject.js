import React from 'react';
import Link from 'next/link';

const StartProject = () => {
    return (
        <div className="project-start-area bg-color ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img src="/img/project-start1.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>We Like to Start Your Project With Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <Link href="/contact">
                                <a className="default-btn">
                                    <i className="flaticon-web"></i> 
                                    Get Started 
                                    <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
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

export default StartProject;