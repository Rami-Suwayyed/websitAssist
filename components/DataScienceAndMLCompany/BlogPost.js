import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <section className="blog-area pt-100 pb-70 bg-fffbf5">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" />
                        One-Stop Solution
                    </span>
                    <h2>One-Stop Solution For Business Accelerating
                    </h2>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/img/blog/blog-img1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                {/* <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/img/user1.jpg" className="rounded-circle" alt="image" />
                                            <span>Alex Morgan</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 30, 2020
                                    </li>
                                </ul> */}
                                <h3 className="parDeatiles">
                                    <Link href="/blog-details">
                                        <a>Unlock the full potential of your business with our dedicated Business Improvement solution. Our expert consultants work closely with you to identify inefficiencies, streamline processes, and implement strategies for enhanced productivity and profitability.
                                        </a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/img/blog/blog-img2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                {/* <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/img/user2.jpg" className="rounded-circle" alt="image" />
                                            <span>Sarah Taylor</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 28, 2020
                                    </li>
                                </ul> */}
                                <h3 className="parDeatiles">
                                    <Link href="/blog-details">
                                        <a>Navigate the dynamic landscape of modern business with confidence through our advanced Marketing Systems. Tailored to meet your unique needs, our systems leverage the latest technologies and data-driven insights.
</a>
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post">
                            <div className="post-image">
                                <Link href="/blog-details">
                                    <a>
                                        <img src="/img/blog/blog-img3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="post-content">
                                {/* <ul className="post-meta d-flex justify-content-between align-items-center">
                                    <li>
                                        <div className="post-author d-flex align-items-center">
                                            <img src="/img/user3.jpg" className="rounded-circle" alt="image" />
                                            <span>David Warner</span>
                                        </div>
                                    </li>
                                    <li>
                                        <i className='flaticon-calendar'></i> April 29, 2020
                                    </li>
                                </ul> */}
                                <h3 className="parDeatiles">
                                    <Link href="/blog-details">
                                        <a>Leave a lasting impression with our exceptional Branding and Design solutions. Our creative team brings your brand to life, crafting compelling visual identities that resonate with your target audience. Whether it's a brand refresh, logo design, or complete visual overhaul, we ensure your brand stands out in a crowded market.
</a>
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