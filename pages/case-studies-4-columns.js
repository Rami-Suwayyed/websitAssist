import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FourColumns from '../components/CaseStudies/FourColumns';
import Footer from '../components/_App/Footer';

const CaseStudies4Columns = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Case Studies 4 Columns" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies 4 Columns" 
            />

            <FourColumns />
            
            <Footer />
        </>
    );
}

export default CaseStudies4Columns;