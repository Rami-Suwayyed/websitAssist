import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const OurSolutions = () => {
    const { t } = useTranslation();

    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        {t("Our Solutions")}
                    </span>
                    <h2>{t("One-Stop Solution For Business Accelerating")}</h2>
                    <p>{t("To Save money and time, and get a consistent quality of work with less headache.")}</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-sm-6 ourSolution">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-rocket"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>{t("Business Improvement")}</a>
                                </Link>
                            </h3>
                            <p>{t("Unlock the full potential of your business with our dedicated Business Improvement solution. Our expert consultants work closely with you to identify inefficiencies, streamline processes, and implement strategies for enhanced productivity and profitability.")}</p>

                            {/* <Link href="/service-details">
                                <a className="view-details-btn">View Details</a>
                            </Link> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 ourSolution">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-laptop"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>{t("Marketing Systems")}</a>
                                </Link>
                            </h3>
                            <p>{t("Navigate the dynamic landscape of modern business with confidence through our advanced Marketing Systems. Tailored to meet your unique needs, our systems leverage the latest technologies and data-driven insights.")}</p>
                            
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3 ourSolution">
                        <div className="single-solutions-box">
                            <div className="icon">
                                <i className="flaticon-money"></i>
                            </div>
                            <h3>
                                <Link href="/service-details">
                                    <a>{t("Branding and Design")}</a>
                                </Link>
                            </h3>
                            <p>{t("Leave a lasting impression with our exceptional Branding and Design solutions. Our creative team brings your brand to life, crafting compelling visual identities that resonate with your target audience. Whether it's a brand refresh, logo design, or complete visual overhaul, we ensure your brand stands out in a crowded market.")}</p>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSolutions;