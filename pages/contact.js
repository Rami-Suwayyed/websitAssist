import React, { useState, useEffect } from 'react';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import axios from 'axios'
import Branches from '../components/Contact/Branches';
import { useTranslation } from 'react-i18next';

const Contact = ({ url }) => {
    const [data, setData] = useState(null);
    const { t } = useTranslation();

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
                pageTitle={t("Contact")}
                homePageText={t("Home")}
                homePageUrl="/"
               
            />

            <ContactInfo data={data}/>

            <ContactForm />
            <Branches data={data}/>

        </>
    );
}

export default Contact;