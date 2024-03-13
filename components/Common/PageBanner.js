import React from 'react';
import Link from 'next/link';

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>{pageTitle}</h2>
                    <ul>
                        <li>
                            <Link href={homePageUrl}>
                                <a>{homePageText}</a>
                            </Link>
                        </li>
                        <li>{activePageText}</li>
                    </ul>
                </div>
            </div>

            <div className="shape-img1">
                <img src="/img/shape/shape1.svg" alt="image" />
            </div>
            <div className="shape-img2">
                <img src="/img/shape/shape2.png" alt="image" />
            </div>
            <div className="shape-img3">
                <img src="/img/shape/shape3.png" alt="image" />
            </div>
        </div>
    );
}

export default PageBanner;