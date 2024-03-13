import React from 'react';
import Link from 'next/link';

const TwoColumns = () => {
    return (
        <div className="projects-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/project1.jpg" alt="image" />

                                <Link href="/case-studies-details">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/case-studies-details">
                                        <a>Movie Recommendation</a>
                                    </Link>
                                </h3>
                                <span>System Project</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/project2.jpg" alt="image" />

                                <Link href="/case-studies-details">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/case-studies-details">
                                        <a>Customer Segmentation</a>
                                    </Link>
                                </h3>
                                <span>Machine Learning</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/project3.jpg" alt="image" />

                                <Link href="/case-studies-details">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/case-studies-details">
                                        <a>Data Analysis</a>
                                    </Link>
                                </h3>
                                <span>Web Project</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/project4.jpg" alt="image" />

                                <Link href="/case-studies-details">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/case-studies-details">
                                        <a>Detection Project</a>
                                    </Link>
                                </h3>
                                <span>Programming</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box ">
                            <div className="image">
                                <img src="/img/projects/project5.jpg" alt="image" />

                                <Link href="/case-studies-details">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/case-studies-details">
                                        <a>Data Scientist</a>
                                    </Link>
                                </h3>
                                <span>Data Science</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-projects-box">
                            <div className="image">
                                <img src="/img/projects/project6.jpg" alt="image" />

                                <Link href="/case-studies-details">
                                    <a className="link-btn"><i className='bx bx-plus'></i></a>
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/case-studies-details">
                                        <a>Benefits Research</a>
                                    </Link>
                                </h3>
                                <span>Science Projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColumns;