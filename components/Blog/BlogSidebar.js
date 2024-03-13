import React from 'react';
import Link from 'next/link';

const BlogSidebar = () => {
    return (
        <div className="widget-area">
            <div className="widget widget_search">
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
            </div>

            <div className="widget widget_tracer_posts_thumb">
                <h3 className="widget-title">Popular Posts</h3>

                <article className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 10, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>The Data Surrounding Higher Education</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 21, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>Conversion Rate the Sales Funnel Optimization</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>

                <article className="item">
                    <Link href="/blog-details">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>June 30, 2020</span>
                        <h4 className="title usmall">
                            <Link href="/blog-details">
                                <a>Business Data is changing the world’s Energy</a>
                            </Link>
                        </h4>
                    </div>

                    <div className="clear"></div>
                </article>
            </div>

            <div className="widget widget_categories">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    <li>
                        <Link href="/blog">
                            <a>Design <span className="post-count">(03)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Lifestyle <span className="post-count">(05)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Script <span className="post-count">(10)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Device <span className="post-count">(08)</span></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Tips <span className="post-count">(01)</span></a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <Link href="/blog">
                        <a>Business <span className="tag-link-count">(3)</span></a>
                    </Link>
                    <Link href="/blog">
                        <a>Design <span className="tag-link-count">(3)</span></a>
                    </Link>
                    <Link href="/blog">
                        <a>Braike <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="/blog">
                        <a>Fashion <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="/blog">
                        <a>Travel <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="/blog">
                        <a>Smart <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="/blog">
                        <a>Marketing <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="/blog">
                        <a>Tips <span className="tag-link-count">(2)</span></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;