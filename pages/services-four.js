import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleFour from '../components/Services/ServicesStyleFour';
import StartProject from '../components/Common/StartProject';
import Footer from '../components/_App/Footer';
 
const ServicesFour = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Services Four" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services Four" 
            />

            <ServicesStyleFour />

            <StartProject />
            
            <Footer />
        </>
    );
}

export default ServicesFour;