import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactInfo = ({ data }) => {
    const { t } = useTranslation();

    return (
        <>
        {data?.slice(0,1)?.map((item)=>{
            return   <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <h3>{t("Our Address")}</h3>
                            <p>{item?.address}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>{t("Contact")}</h3>
                            <p>{t("Mobile")}: <a href={`tel:{item?.phone_number}`}>{item?.phone_number}</a></p>
                            <p>{t("E-mail")}: <a href={`mailto:${item?.email}`}>{item?.email}</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-time-five'></i>
                            </div>
                            <h3>{t("Hours of Operation")}</h3>
                            {/* <p>Monday - Friday: 09:00 - 20:00</p> */}
                            <p>{t("Sunday - Thursday")}: 09:30 - 17:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        })}
      
        </>
    )
}

export default ContactInfo;