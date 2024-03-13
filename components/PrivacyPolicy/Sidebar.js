import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="widget-area">
            <div className="widget widget_insight">
                <ul>
                    <li>
                        <Link href="/about-us">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Purchase Guide</a>
                        </Link>
                    </li>
                    <li className="active">
                        <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Terms of Service</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="widget widget_recent_courses">
                <h3 className="widget-title">Recent Courses</h3>

                <article className="item">
                    <a href="#" className="thumb">
                        <span className="fullimage cover bg1" role="img"></span>
                    </a>
                    <div className="info">
                        <span>$49.00</span>
                        <h4 className="title usmall"><a href="#">The Data Science Course 2020: Complete Data Science Bootcamp</a></h4>
                    </div>
                    <div className="clear"></div>
                </article>

                <article className="item">
                    <a href="#" className="thumb">
                        <span className="fullimage cover bg2" role="img"></span>
                    </a>
                    <div className="info">
                        <span>$59.00</span>
                        <h4 className="title usmall"><a href="#">Java Programming MasterclassName for Software Developers</a></h4>
                    </div>
                    <div className="clear"></div>
                </article>

                <article className="item">
                    <a href="#" className="thumb">
                        <span className="fullimage cover bg3" role="img"></span>
                    </a>
                    <div className="info">
                        <span>$69.00</span>
                        <h4 className="title usmall"><a href="#">Deep Learning A-Z™: Hands-On Artificial Neural Networks</a></h4>
                    </div>
                    <div className="clear"></div>
                </article>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <a href="#">Business <span className="tag-link-count"> (3)</span></a>
                    <a href="#">Design <span className="tag-link-count"> (3)</span></a>
                    <a href="#">Braike <span className="tag-link-count"> (2)</span></a>
                    <a href="#">Fashion <span className="tag-link-count"> (2)</span></a>
                    <a href="#">Travel <span className="tag-link-count"> (1)</span></a>
                    <a href="#">Smart <span className="tag-link-count"> (1)</span></a>
                    <a href="#">Marketing <span className="tag-link-count"> (1)</span></a>
                    <a href="#">Tips <span className="tag-link-count"> (2)</span></a>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;