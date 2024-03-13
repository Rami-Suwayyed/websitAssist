import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CoursesRightSidebarContent from '../components/Courses/CoursesRightSidebarContent';
import Footer from '../components/_App/Footer';

const CoursesRightSidebar = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Courses With Sidebar" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Courses With Sidebar" 
            />

            <CoursesRightSidebarContent />
            
            <Footer />
        </>
    );
}

export default CoursesRightSidebar;