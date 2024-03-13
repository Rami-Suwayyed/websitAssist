import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TermsOfServiceContent from '../components/TermsOfService/TermsOfServiceContent';
import Footer from '../components/_App/Footer';

const TermsOfService = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Terms of Service" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Terms of Service" 
            />

            <TermsOfServiceContent />
            
            <Footer />
        </>
    )
}

export default TermsOfService;