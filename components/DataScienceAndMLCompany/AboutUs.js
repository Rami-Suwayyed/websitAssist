import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios'
const AboutUs = () => {

  

    return (
        <section className="about-area pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="/img/about/about-img5.png" alt="image" />
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

                                    <li>
                                        <img src="/img/icons/icon6.png" alt="image" />
                                        <h3>100%</h3>
                                        <p>Satisfaction rate</p>
                                    </li>

                                    <li>
                                        <img src="/img/icons/icon7.png" alt="image" />
                                        <h3>80%</h3>
                                        <p>Senior scientist</p>
                                    </li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                <Link href="/about-us">
                                    <a className="default-btn">
                                        <i className="flaticon-right"></i>More About Us<span></span>
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
        </section>
    )
}

export default AboutUs;