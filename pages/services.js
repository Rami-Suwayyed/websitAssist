import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import ServicesOne from '../components/Services/ServicesOne';
import StartProject from '../components/Common/StartProject';

const Services = () => {
    return (
        <>

            <PageBanner
                pageTitle="Services" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Services" 
            />

            <ServicesOne />
            
            <StartProject />
            
        </>
    );
}

export default Services;