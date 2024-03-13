import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TestimonialsStyleOne from '../components/Testimonials/TestimonialsStyleOne';
import TestimonialsStyleTwo from '../components/Testimonials/TestimonialsStyleTwo';
import Footer from '../components/_App/Footer';

const Testimonials = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Testimonials" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Testimonials" 
            />

            <TestimonialsStyleOne />

            <TestimonialsStyleTwo />
            
            <Footer />
        </>
    );
}

export default Testimonials;