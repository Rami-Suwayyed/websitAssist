import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CaseStudiesDetailsContentTwo from '../components/CaseStudiesDetails/CaseStudiesDetailsContentTwo';
import RelatedProjects from '../components/CaseStudiesDetails/RelatedProjects';
import Footer from '../components/_App/Footer';

const CaseStudiesDetailsTwo = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Case Studies Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Case Studies Details" 
            />

            <CaseStudiesDetailsContentTwo />

            <RelatedProjects />
            
            <Footer />
        </>
    );
}

export default CaseStudiesDetailsTwo;