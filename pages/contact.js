import React, { useState, useEffect } from 'react';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import axios from 'axios'
const Contact = ({ url }) => {
    const [data, setData] = useState(null);

    const getAboutData = async () => {
        await axios.get(`${url}/get_branch_data`).then((res) => {
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
                pageTitle="Contact"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Contact"
            />

            <ContactInfo data={data}/>

            <ContactForm />

        </>
    );
}

export default Contact;