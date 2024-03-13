import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import EventDetailsContent from '../components/Events/EventDetailsContent';
import EventSpeakers from '../components/Events/EventSpeakers';
import Footer from '../components/_App/Footer';

const EventDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Event Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Event Details" 
            />

            <EventDetailsContent />

            <EventSpeakers />
            
            <Footer />
        </>
    );
}

export default EventDetails;