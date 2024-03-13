import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent';
import RelatedServices from '../components/ServiceDetails/RelatedServices';

const ServiceDetails = () => {
    return (
        <>
            <PageBanner
                pageTitle="Service Details"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Service Details"
            />

            <ServiceDetailsContent />

            <RelatedServices />
        </>
    );
}

export default ServiceDetails;