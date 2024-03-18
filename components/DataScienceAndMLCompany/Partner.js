import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const OwlCarousel = dynamic(() => import('react-owl-carousel3'), { ssr: false });


const Partner = ({ url, setLoading }) => {
    const [data, setData] = useState(null);
    const {t, i18n} = useTranslation();


    const getDataPar = async () => {
        setLoading(true);
        await axios.get(`${url}/get_partners`, {
            headers: {
                "language": localStorage.getItem("lang")
            }
        }).then((res) => {
            setData(res.data?.data);
            setLoading(false);

        }).catch((err) => console.log(err));
    }
    useEffect(() => {
        getDataPar();
    }, [i18n.language]);
    
    const options = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    };
    return (
        <div className="partner-area pt-100 pb-70 bg-f1f8fb">
            <div className="container partener">
                <OwlCarousel className="owl-theme" {...options}>
                    {data?.map((item, index) => (
                        <div key={index} className="item">
                            <img src={item?.image} alt={`partner-${index + 1}`} className='partnerImage' />
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Partner;