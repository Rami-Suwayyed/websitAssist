import React, { useState } from 'react';
import Link from 'next/link';

const FeaturedServices = () => {
    const [nextOne, setNextOne] = useState(true)
    const [nextTwo, setnextTwo] = useState(true)
    const [nextThree, setnextThree] = useState(true);

    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" />

                    </span>
                    <h2>  Next-Level Advantage</h2>
                    <h4>3 Reasons Our Solutions Redefine Business Success.</h4>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src="/img/services/service-icon1.png" alt="image" />
                            </div>
                            <h3>

                                <a>Strategic Growth and Efficiency</a>

                            </h3>
                            <p className={nextOne ? "parLevel" : "parLevelTotal"}>Experience a surge in business performance as our Business Improvement solutions unlock new levels of efficiency and strategic growth.

                                Through meticulous analysis and optimization of your operations, we identify and eliminate bottlenecks, streamline processes, and provide actionable insights.

                                The result? A leaner, more agile business ready to seize opportunities and navigate challenges, setting the stage for sustainable growth
                                .</p>

                            <a className="read-more-btn" onClick={() => setNextOne(!nextOne)}>
                                Read More
                                <i className="flaticon-right"></i>
                            </a>

                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src="/img/services/service-icon2.png" alt="image" />
                            </div>
                            <h3>

                                <a>Amplified Market Presence and Engagement</a>

                            </h3>
                            <p className={nextTwo ? "parLevel" : "parLevelTotal"}>With our advanced Marketing Systems, enjoy a dynamic and impactful presence in the market.

                                Benefit from targeted campaigns, harnessing the latest technologies and data-driven strategies to reach your audience effectively.

                                From heightened customer acquisition to improved retention rates, our solutions ensure that your business not only attracts attention but fosters lasting connections, establishing a strong and loyal customer base.
                            </p>

                            <a className="read-more-btn" onClick={() => setnextTwo(!nextTwo)}>
                                Read More
                                <i className="flaticon-right"></i>
                            </a>

                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                        <div className="single-services-item-box">
                            <div className="icon">
                                <img src="/img/services/service-icon3.png" alt="image" />
                            </div>
                            <h3>
                                <a>Memorable Brand Identity and Recognition</a>

                            </h3>

                            <p className={nextThree ? "parLevel" : "parLevelTotal"}>Make an indelible mark on your industry with our Branding & Design solutions. Our creative experts craft compelling visual identities that resonate with your audience, ensuring your brand stands out in a crowded market.

                                Whether it's a refreshed logo, a complete visual overhaul, or strategic brand positioning, we elevate your business aesthetics.

                                Enjoy increased brand recognition, trust, and loyalty as your business becomes synonymous with quality and distinction.
                            </p>

                            <a className="read-more-btn" onClick={() => setnextThree(!nextThree)}>
                                Read More
                                <i className="flaticon-right"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedServices;