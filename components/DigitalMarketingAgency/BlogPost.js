import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <section className="blog-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Latest Valuable Insights</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/img/blog/blog-img4.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/img/user1.jpg" className="rounded-circle" alt="image" />
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 30, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Six Ways to Make Smarter Decisions</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/img/blog/blog-img5.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/img/user2.jpg" className="rounded-circle" alt="image" />
                                            <span>Sarah Taylor</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 28, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>The Challenges to Tackle Before You Start With AI</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post bg-fffbf5">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/img/blog/blog-img6.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/img/user3.jpg" className="rounded-circle" alt="image" />
                                            <span>David Warner</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 29, 2020
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/blog-details">
                                        <a>Why Organisations Want an Analytics Platform</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="vector-shape1">
                <img src="/img/shape/vector-shape1.png" alt="image" />
            </div>
            <div className="vector-shape2">
                <img src="/img/shape/vector-shape2.png" alt="image" />
            </div>
        </section>
    )
}

export default BlogPost;