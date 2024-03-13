import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import OurHistoryContentOne from '../components/History/OurHistoryContentOne';
import OurHistoryContentTwo from '../components/History/OurHistoryContentTwo';
import Footer from '../components/_App/Footer';

const History = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="History" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="History" 
            />

            <OurHistoryContentOne />

            <OurHistoryContentTwo />
            
            <Footer />
        </>
    );
}

export default History;