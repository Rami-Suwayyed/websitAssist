import React, { useState, useEffect } from 'react';
import PageBanner from '../components/Common/PageBanner';
import TestimonialsStyleOne from '../components/Testimonials/TestimonialsStyleOne';
import TestimonialsStyleTwo from '../components/Testimonials/TestimonialsStyleTwo';
import axios from 'axios';

const Testimonials = ({url}) => {
    const [data, setData] = useState(null);

    const getAboutData = async () => {
        await axios.get(`${url}/get_project`, {

        }).then((res) => {
            setData(res.data?.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        getAboutData();
    }, []);
    return (
        <>

            <PageBanner
                pageTitle="Testimonials"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Testimonials"
            />

            <TestimonialsStyleOne data={data}/>


        </>
    );
}

export default Testimonials;