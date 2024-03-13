import React from 'react';
import Link from 'next/link';

const Courses = () => {
    return (
        <section className="courses-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    <h2>Online Data Science Courses</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/course-details">
                                    <a className="d-block image">
                                        <img src="/img/courses/course1.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                </Link>
                                <div className="price shadow free">Free</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/img/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <Link href="/course-details">
                                        <a>Introduction to Quantitative Methods</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 8 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box ">
                            <div className="courses-image">
                                <Link href="/course-details">
                                    <a className="d-block image">
                                        <img src="/img/courses/course2.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                </Link>
                                <div className="price shadow">$49</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/img/user2.jpg" className="rounded-circle" alt="image" />
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3>
                                    <Link href="/course-details">
                                        <a>Introduction to Linear Models and Matrix Algebra</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 7 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/course-details">
                                    <a className="d-block image">
                                        <img src="/img/courses/course3.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                </Link>
                                <div className="price shadow">$69</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/img/user3.jpg" className="rounded-circle" alt="image" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link href="/course-details">
                                        <a>Data Science: Inference and Modeling</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 2 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="courses-info">
                            <p>Get the most dedicated consultation for your life-changing course. Earn a certification for your effort and passion <Link href="/profile-authentication"><a>Join Free Now</a></Link>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape6">
                <img src="/img/shape/vector-shape6.png" alt="image" />
            </div>
        </section>
    )
}

export default Courses;