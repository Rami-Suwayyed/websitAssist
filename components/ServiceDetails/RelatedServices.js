import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios'
const RelatedServices = ({ data }) => {

    return (
        <section className="services-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <h2>More Services You Might Like</h2>
                </div>

                <div className="row">
                    {data?.slice(0, 3)?.map((item) => {
                        return <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box ">
                                <div className="icon">
                                    <img src={item?.image} alt="image" className='serverImage' />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>{item?.title}</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                                <Link href="/service-details">
                                    <a className="read-more-btn">Read More <i className="flaticon-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default RelatedServices;