import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleThree from '../components/Services/ServicesStyleThree';
import StartProject from '../components/Common/StartProject';
import Footer from '../components/_App/Footer';
 
const ServicesThree = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Services Three" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services Three" 
            />

            <ServicesStyleThree />

            <StartProject />
            
            <Footer />
        </>
    );
}

export default ServicesThree;