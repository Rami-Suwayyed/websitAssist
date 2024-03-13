import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PrivacyPolicyContent from '../components/PrivacyPolicy/PrivacyPolicyContent';
import Footer from '../components/_App/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Privacy Policy" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Privacy Policy" 
            />

            <PrivacyPolicyContent />
            
            <Footer />
        </>
    )
}

export default PrivacyPolicy;