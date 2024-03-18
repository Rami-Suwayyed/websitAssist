import React, { useState, useEffect } from 'react';
import PageBanner from '../components/Common/PageBanner';
import AboutUsContent from '../components/AboutUs/AboutUsContent';
// import OurHistory from '../components/AboutUs/OurHistory';
// import WhyChooseUs from '../components/AboutUs/WhyChooseUs';
// import HowItWork from '../components/AboutUs/HowItWork';
// import TeamMembers from '../components/AboutUs/TeamMembers';
// import Testimonials from '../components/AboutUs/Testimonials';
// import Partner from '../components/AboutUs/Partner';
import axios from 'axios';
import OurMission from '../components/AboutUsTwo/OurMissionTwo';
import { useTranslation } from 'react-i18next';
import { useLoading } from '../store/index';

const AboutUs = ({ url }) => {
    const [data, setData] = useState(null);
    const { t, i18n } = useTranslation();
    const { setLoading } = useLoading();

    const getAboutData = async () => {
        setLoading(true);
        await axios.get(`${url}/get_about`,{
            headers:{
                "language":localStorage.getItem("lang")
            }
        }).then((res) => {
            setData(res.data?.data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getAboutData();
    }, [i18n.language]);
    
    return (
        <>
            <PageBanner
                pageTitle={t("About Us")}
                homePageText={t("Home")}
                homePageUrl="/"
            />
            <AboutUsContent data={data} />
            <OurMission data={data}/>
            {/* <OurHistory />
            <WhyChooseUs />
            <HowItWork />
            <TeamMembers />
            <Testimonials />
            <Partner /> */}
        </>
    );
}

export default AboutUs;