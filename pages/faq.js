import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqContent from '../components/FAQ/FaqContent';
import StartProject from '../components/Common/StartProject';
import Footer from '../components/_App/Footer';

const FAQ = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="FAQ" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="FAQ" 
            />

            <FaqContent />

            <StartProject />
            
            <Footer />
        </>
    );
}

export default FAQ;