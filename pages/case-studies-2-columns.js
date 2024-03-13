import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TwoColumns from '../components/CaseStudies/TwoColumns';
import Footer from '../components/_App/Footer';

const CaseStudies2Columns = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Case Studies 2 Columns" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies 2 Columns" 
            />

            <TwoColumns />
            
            <Footer />
        </>
    );
}

export default CaseStudies2Columns;