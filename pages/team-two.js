import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamStyleTwo from '../components/Team/TeamStyleTwo';
import Footer from '../components/_App/Footer';
 
const TeamTwo = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Team Two" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Team Two" 
            />

            <TeamStyleTwo />
            
            <Footer />
        </>
    );
}

export default TeamTwo;