import React, { useEffect, useState } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import axios from 'axios';

const OwlCarousel = dynamic(() => import('react-owl-carousel3'), { ssr: false });


const Partner = ({ url }) => {
    const [data, setData] = useState(null);

    const partnerImages = [
        '/img/partner/partner1.png',
        '/img/partner/partner2.png',
        '/img/partner/partner3.png',
        '/img/partner/partner4.png',
        '/img/partner/partner5.png',
        '/img/partner/partner6.png',
    ];

    const getDataPar = async () => {
        await axios.get(`${url}/get_partners`).then((res) => {
            setData(res.data?.data);

        }).catch((err) => console.log(err));
    }
    useEffect(() => {
        getDataPar();
    }, [])
    const options = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // Adjust the autoplay speed in milliseconds
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
                            <img  src={item?.image} alt={`partner-${index + 1}`} className='partnerImage' />
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Partner;