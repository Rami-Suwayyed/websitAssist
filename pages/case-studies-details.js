import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CaseStudiesDetailsContent from '../components/CaseStudiesDetails/CaseStudiesDetailsContent';
import RelatedProjects from '../components/CaseStudiesDetails/RelatedProjects';
import Footer from '../components/_App/Footer';

const CaseStudiesDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Case Studies Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies Details" 
            />

            <CaseStudiesDetailsContent />
            
            <RelatedProjects />
            
            <Footer />
        </>
    );
}

export default CaseStudiesDetails;