import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src="/img/star-icon.png" alt="image" /> 
                                People Love Us
                            </span>
                            <h3>Seamless Collaboration: How to Work With Us in 3 Simple Steps?</h3>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>Initial Consultation</h3>
                                    <p>Schedule a personalized discovery session to discuss your business goals and challenges. This allows us to tailor our approach to your unique needs.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        2
                                    </div>
                                    <h3>Customized Strategy Proposal</h3>
                                    <p>Receive a detailed strategy proposal outlining recommended solutions aligned with your objectives, providing a clear roadmap for success.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        3
                                    </div>
                                    <h3>Collaborative Execution and Support</h3>
                                    <p>Upon approval, we seamlessly transition into execution, with ongoing collaboration and support to ensure your business achieves transformative outcomes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img src="/img/how-its-work.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs;