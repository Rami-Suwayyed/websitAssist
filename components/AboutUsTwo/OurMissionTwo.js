import React from 'react';
import ReactHtmlParser from "html-react-parser"

const OurMission = ({ data }) => {
    return (
        <>
            {data?.slice(1, 2)?.map((item) => {
                return <section className="our-mission-area ptb-100">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="our-mission-content">
                                    <div className="content">
                                        <span className="sub-title">
                                            <img src="/img/star-icon.png" alt="image" />
                                        </span>
                                        <h2>{item?.title}</h2>
                                        <p>{ReactHtmlParser(item?.description)}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="our-mission-image">
                                    <img src="/img/our-mission/our-mission1.png" alt="image" />
                                    <div className="shape">
                                        <img src="/img/our-mission/our-mission-shape1.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            })}

        </>
    )
}

export default OurMission;