import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useLoading } from '../../store/index';


const Footer = ({ data, url }) => {
    const { t } = useTranslation();
    const { setLoading } = useLoading();
    const [dataServer, setDataServer] = useState(null);

    const getSliderData = async () => {
        setLoading(true)
        await axios.get(`${url}/get_services`).then((res) => {
            setDataServer(res.data?.data);
            setLoading(false);
        }).catch((err) => console.log(err))
    }
    useEffect(() => {
        getSliderData();
    }, []);
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src={data?.data?.footer_icon} alt="logo" className="footer_icon" />
                            </a>

                            <ul className="social-link">
                                {data?.data?.social_media.map((item) => {
                                    return <li>
                                        <Link href={item?.link}>
                                            <a className="d-block" target="_blank">
                                                <i className={`bx bxl-${item?.type}`}></i>
                                            </a>
                                        </Link>
                                    </li>
                                })}

                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>{t("Explore")}</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/">
                                        <a>{t("Home")}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us">
                                        <a>{t("About Us")}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>{t("Contact")}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#service_section">
                                        <a>{t("Services")}</a>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>{t("Our Services")}</h3>

                            <ul className="footer-links-list">
                                {dataServer?.slice(0, 3)?.map((item) => {
                                    return <li>
                                        <Link href={`/show-service/${item?.slug}`}>
                                            <a>{item?.title}</a>
                                        </Link>
                                    </li>
                                })}


                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>{t("Address")}</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i>
                                    {data?.data?.address}
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+44587154756">{data?.data?.phone_number}</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:hello@tarn.com">{data?.data?.email}</a>
                                </li>
                                <li>
                                    <i className='bx bxs-inbox'></i>
                                    <a href="tel:+557854578964">{data?.data?.phone_number}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">


                        {/* <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src="/img/footer-map.png" alt="image" />
            </div>
        </footer>
    );
}

export default Footer;