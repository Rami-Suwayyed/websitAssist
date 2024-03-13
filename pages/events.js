import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import EventsCard from '../components/Events/EventsCard';
import Footer from '../components/_App/Footer';

const Events = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Events" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Events" 
            />

            <EventsCard />
            
            <Footer />
        </>
    );
}

export default Events;