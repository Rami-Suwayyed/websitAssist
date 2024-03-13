import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';
import Footer from '../components/_App/Footer';

const BlogDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Blog Details" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Blog Details" 
            /> 

            <BlogDetailsContent />
            
            <Footer />
        </>
    )
}

export default BlogDetails;