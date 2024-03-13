import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/DataAnalyticsAIStartup/MainBanner';
import FeaturedService from '../components/DataAnalyticsAIStartup/FeaturedService';
import AboutUs from '../components/DataAnalyticsAIStartup/AboutUs';
import OurMission from '../components/DataAnalyticsAIStartup/OurMission';
import Funfacts from '../components/DataAnalyticsAIStartup/Funfacts';
import OurServices from '../components/DataAnalyticsAIStartup/OurServices';
import HowItWork from '../components/DataAnalyticsAIStartup/HowItWork';
import TeamMembers from '../components/DataAnalyticsAIStartup/TeamMembers';
import Testimonials from '../components/DataAnalyticsAIStartup/Testimonials';
import Partner from '../components/DataAnalyticsAIStartup/Partner';
import StartProject from '../components/DataAnalyticsAIStartup/StartProject';
import BlogPost from '../components/DataAnalyticsAIStartup/BlogPost';
import Footer from '../components/_App/Footer';

const DataAnalyticsAIStartup = () => {
    return (
        <>
            <Navbar />
            <MainBanner />
            <FeaturedService />
            <AboutUs />
            <OurMission />
            <Funfacts />
            <OurServices />
            <HowItWork />
            <TeamMembers />
            <Testimonials />
            <Partner />
            <StartProject />
            <BlogPost />
            <Footer />
        </>
    );
}

export default DataAnalyticsAIStartup;