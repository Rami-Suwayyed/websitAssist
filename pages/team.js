import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamStyleOne from '../components/Team/TeamStyleOne';
import Footer from '../components/_App/Footer';
 
const Team = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Team" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Team" 
            />

            <TeamStyleOne />

            <Footer />
        </>
    );
}

export default Team;