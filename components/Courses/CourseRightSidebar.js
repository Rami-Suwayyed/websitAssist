import React from 'react';
import Link from 'next/link';

const CourseRightSidebar = () => {
    return (
        <aside className="widget-area">
            <section className="widget widget_search">
                <h3 className="widget-title">Search</h3>

                <form className="search-form">
                    <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit">
                        <i className="bx bx-search-alt"></i>
                    </button>
                </form>
            </section>
  
            <section className="widget widget_recent_courses">
                <h3 className="widget-title">Recent Courses</h3>

                <article className="item">
                    <Link href="/case-studies-details">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>$49.00</span>
                        <h4 className="title usmall">
                            <Link href="/case-studies-details">
                                <a>The Data Science Course 2020: Complete Data Science Bootcamp</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link href="/case-studies-details">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>$59.00</span>
                        <h4 className="title usmall">
                            <Link href="/case-studies-details">
                                <a>Java Programming MasterclassName for Software Developers</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link href="/case-studies-details">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>$69.00</span>
                        <h4 className="title usmall">
                            <Link href="/case-studies-details">
                                <a>Deep Learning A-Z™: Hands-On Artificial Neural Networks</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </article>
            </section>

            <section className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <Link href="/case-studies-2-columns">
                        <a>Business <span className="tag-link-count">(3)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>Design <span className="tag-link-count">(3)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>Digital <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>SEO <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>Braike <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>Fashion <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>Software <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>Travel <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>Smart <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>Marketing <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>Tips <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="/case-studies-2-columns">
                        <a>Website <span className="tag-link-count">(2)</span></a>
                    </Link>
                </div>
            </section>
        </aside>
    )
}

export default CourseRightSidebar;