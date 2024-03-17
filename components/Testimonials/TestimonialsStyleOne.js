import React from 'react';

const TestimonialsStyleOne = ({ data }) => {
    return (
        <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" />
                        Testimonials
                    </span>
                    <h2>Proven Excellence
                    </h2>
                    <p>A Glimpse into the Results We Deliver.

                    </p>
                </div>

                <div className="row card-testimonals">
                {data?.map((item) => {
                        return <div className="single-testimonials-item">
                            <img src={item?.first_image}  className='allprojectImage'/>
                            <div className="client-info">
                                <div className="d-flex justify-content-center align-items-center">
                                    {/* <img src="/img/projectTwo.webp" alt="image" /> */}
                                    <div className="title">
                                        <h3>{item?.title}</h3>
                                        {/* <span className="viewButton">View</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TestimonialsStyleOne;