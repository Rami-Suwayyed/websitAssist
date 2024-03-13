import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ThreeColumns from '../components/CaseStudies/ThreeColumns';
import Footer from '../components/_App/Footer';

const CaseStudies3Columns = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Case Studies 3 Columns" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies 3 Columns" 
            />

            <ThreeColumns />
            
            <Footer />
        </>
    );
}

export default CaseStudies3Columns;