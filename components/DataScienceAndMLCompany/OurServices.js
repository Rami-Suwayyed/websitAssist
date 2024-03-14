import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Reactparser from 'html-react-parser'
const OurServices = ({ url }) => {
    const [data, setData] = useState(null);
    const { t } = useTranslation();

    const getSliderData = async () => {
        await axios.get(`${url}/get_services`).then((res) => {
            setData(res.data?.data);

        }).catch((err) => console.log(err))
    }
    useEffect(() => {
        getSliderData();
    }, []);
    return (
        <section className="services-area ptb-100 bg-f1f8fb" id='service_section'>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" />
                        {t("Our Services")}
                    </span>
                    <h2>{t("We Offer Professional Solutions For Business")}</h2>
                </div>

                <div className="row">
                    {data?.map((item) => {
                        return <div className="col-lg-4 col-md-6 col-sm-6 box-services">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src={item?.image} alt="image" className='serverImage' />
                                </div>
                                <h5>
                                    <Link href={`/show-service/${item?.slug}`}>
                                        <a>{item?.title}</a>
                                    </Link>
                                </h5>
                                <p>{item?.description && Reactparser(item?.description)}</p>

                                <Link href={`/show-service/${item?.slug}`}>
                                    <a className="read-more-btn">
                                        Read More <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div className="circle-shape2">
                <img src="/img/shape/circle-shape2.png" alt="image" />
            </div>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </section>
    )
}

export default OurServices;