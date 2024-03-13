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
const AboutUs = ({ url }) => {
    const [data, setData] = useState(null);

    const getAboutData = async () => {
        await axios.get(`${url}/get_about`).then((res) => {
            setData(res.data?.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getAboutData();
    }, []);
    console.log("abo",data)
    return (
        <>
            <PageBanner
                pageTitle="About Us"
                homePageText="Home"
                homePageUrl="/"
                activePageText="About Us"
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