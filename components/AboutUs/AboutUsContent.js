import React from 'react';
import ReactHtmlParser from "html-react-parser"
const AboutUsContent = ({ data }) => {

    return (
        <>
            {data?.slice(0, 1)?.map((item) => {
                return <div className="about-area ptb-100">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img src="/img/about/about-img10.png" alt="image" />
                                    <div className="shape">
                                        <img src="/img/about/about-shape1.png" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <div className="content">
                                        <span className="sub-title">
                                            <img src="/img/star-icon.png" alt="image" />

                                        </span>
                                        <h2>{item?.title}</h2>
                                        <p>{ReactHtmlParser(item?.description)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </>
    )
}

export default AboutUsContent;