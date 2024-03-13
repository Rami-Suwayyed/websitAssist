import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleFive from '../components/Services/ServicesStyleFive';
import StartProject from '../components/Common/StartProject';
import Footer from '../components/_App/Footer';
 
const ServicesFive = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Services Five" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services Five" 
            />

            <ServicesStyleFive />

            <StartProject />
            
            <Footer />
        </>
    );
}

export default ServicesFive;