import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogWithSidebar from '../components/Blog/BlogWithSidebar';
import Footer from '../components/_App/Footer';

const Blog = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Blog With Sidebar" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog With Sidebar" 
            />

            <BlogWithSidebar />
            
            <Footer />
        </>
    );
}

export default Blog;