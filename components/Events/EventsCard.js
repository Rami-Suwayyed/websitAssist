import React from 'react';
import Link from 'next/link';

const EventsCard = () => {
    return (
        <div className="events-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="/event-details">
                                    <a className="d-block">
                                        <img src="/img/events/event1.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Wed, 20 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/event-details">
                                        <a>Global Conference on Business Management</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Vancover, Canada
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="/event-details">
                                    <a className="d-block">
                                        <img src="/img/events/event2.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Tue, 19 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/event-details">
                                        <a>International Conference on Teacher Education</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Sydney, Australia
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="/event-details">
                                    <a className="d-block">
                                        <img src="/img/events/event3.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Mon, 18 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/event-details">
                                        <a>International Conference on Special Needs Education</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Istanbul, Turkey
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="/event-details">
                                    <a className="d-block">
                                        <img src="/img/events/event4.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Sun, 17 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/event-details">
                                        <a>International Conference on Literacy Teaching</a>
                                    </Link>
                                </h3>

                                <span className="location">
                                    <i className="bx bx-map"></i> Athens, Greece
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="/event-details">
                                    <a className="d-block">
                                        <img src="/img/events/event5.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Sat, 16 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/event-details">
                                        <a>International Conference on Educational Administration</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Rome, Italy
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="/event-details">
                                    <a className="d-block">
                                        <img src="/img/events/event6.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Fri, 15 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/event-details">
                                        <a>International Conference on Education and Pedagogy</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Athens, Greece
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="/event-details">
                                    <a className="d-block">
                                        <img src="/img/events/event7.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Thu, 14 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/event-details">
                                        <a>Research Conference Aims and Objectives</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Tokyo, Japan
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="/event-details">
                                    <a className="d-block">
                                        <img src="/img/events/event8.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Wed, 13 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/event-details">
                                        <a>Conference on Gender Discrimination in Education</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Oslo, Norway
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-events-box">
                            <div className="image">
                                <Link href="/event-details">
                                    <a className="d-block">
                                        <img src="/img/events/event9.jpg" alt="image" />
                                    </a>
                                </Link>
                                <span className="date">Tue, 12 May, 2020</span>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link href="/event-details">
                                        <a>Quality and Improvement in Education Conference</a>
                                    </Link>
                                </h3>
                                <span className="location">
                                    <i className="bx bx-map"></i> Tokyo, Japan
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventsCard;