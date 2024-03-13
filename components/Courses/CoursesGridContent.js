import React from 'react';
import Link from 'next/link';

const CoursesGridContent = () => {
    return (
        <div className="courses-area ptb-100 bg-fafafb">
            <div className="container">
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

                    <div className="col-lg-4 col-md-6">
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
 
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/course-details">
                                    <a className="d-block image">
                                        <img src="/img/courses/course4.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                </Link>
                                <div className="price shadow">$39</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/img/user4.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <Link href="/course-details">
                                        <a>The Data Science Course: Complete Data Science</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 3 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/course-details">
                                    <a className="d-block image">
                                        <img src="/img/courses/course5.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav">
                                        <i className="flaticon-heart"></i>
                                    </a>
                                </Link>
                                <div className="price shadow">$65</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/img/user5.jpg" className="rounded-circle" alt="image" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link href="/course-details">
                                        <a>Java Programming Masterclass for Developers</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agendas'></i> 3 Weeks Long
                                    </li>
                                    <li>
                                        <i className='flaticon-team'></i> Available Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/course-details">
                                    <a className="d-block image">
                                        <img src="/img/courses/course6.jpg" alt="image" />
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
                                    <img src="/img/user6.jpg" className="rounded-circle" alt="image" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link href="/course-details">
                                        <a>Machine Learning A-Z™: Hands-On Python</a>
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

                    {/* Pagination */}
                    <div className="col-lg-12 col-md-12">
                        <div className="pagination-area text-center">
                            <Link href="#">
                                <a className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                            </Link>
                            <span className="page-numbers current">1</span>
                            <Link href="#">
                                <a href="#" className="page-numbers">2</a>
                            </Link>
                            <Link href="#">
                                <a href="#" className="page-numbers">3</a>
                            </Link>
                            <Link href="#">
                                <a href="#" className="page-numbers">4</a>
                            </Link>
                            <Link href="#">
                                <a className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape6">
                <img src="/img/shape/vector-shape6.png" alt="image" />
            </div>
        </div>
    )
}

export default CoursesGridContent;