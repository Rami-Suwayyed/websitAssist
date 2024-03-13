import React from 'react';
import Link from 'next/link';
import ServiceSidebar from './ServiceSidebar';
import ReactHtmlParser from 'html-react-parser';

const ServiceDetailsContent = ({ data, dataReated }) => {
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-image">
                            <img src="/img/services/services-details1.jpg" alt="image" />
                        </div>

                        <div className="services-details-desc">
                            {data?.modules.map((item) => {
                                return <div>

                                    <span className="sub-title">{item?.service_title}</span>
                                    <h3>{item?.slug}</h3>
                                    <p>{ReactHtmlParser(item?.description)}</p>

                                </div>
                            })}

                            {/* <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <img src="/img/projects/project2.jpg" alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>Important Facts</h3>
                                        <ul>
                                            <li>The Field of Data Science</li>
                                            <li>The Problem</li>
                                            <li>The Solution</li>
                                            <li>The Skills</li>
                                            <li>Statistics</li>
                                            <li>Mathematics</li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                            {/* 
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                            <h3>Application Areas</h3>

                            <div className="row">
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-factory"></i>
                                        </div>
                                        Manufacturing
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-hospital"></i>
                                        </div>
                                        Healthcare
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-tracking"></i>
                                        </div>
                                        Automobile
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-investment"></i>
                                        </div>
                                        Banking
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-house"></i>
                                        </div>
                                        Real Estate
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-industries-serve-box">
                                        <div className="icon">
                                            <i className="flaticon-order"></i>
                                        </div>
                                        Logistics
                                    </div>
                                </div>
                            </div> */}

                            {/* <h3>Technologies That We Use</h3>
                            <ul className="technologies-features">
                                <li><span>JavaScript</span></li>
                                <li><span>Python</span></li>
                                <li><span>Java</span></li>
                                <li><span>C/CPP</span></li>
                                <li><span>PHP</span></li>
                                <li><span>Swift</span></li>
                                <li><span>C# (C- Sharp)</span></li>
                                <li><span>Ruby</span></li>
                                <li><span>SQL</span></li>
                            </ul> */}
                            <div className="charts-image">
                                <img src="/img/services/charts.jpg" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <ServiceSidebar  dataReated={dataReated}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceDetailsContent;