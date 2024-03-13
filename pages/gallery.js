import React from 'react';
import Navbar from '../components/_App/Navbar';
import Link from 'next/link';
import PageBanner from '../components/Common/PageBanner';
import Lightbox from 'react-image-lightbox';
import Footer from '../components/_App/Footer';

const images = [
    ('/img/gallery/gallery1.jpg'),
    ('/img/gallery/gallery2.jpg'),
    ('/img/gallery/gallery3.jpg'),
    ('/img/gallery/gallery4.jpg'),
    ('/img/gallery/gallery5.jpg'),
    ('/img/gallery/gallery6.jpg'),
    ('/img/gallery/gallery7.jpg'),
    ('/img/gallery/gallery8.jpg'),
    ('/img/gallery/gallery9.jpg'),
];

const Gallery = () => {
    
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <>
            <Navbar />
            
            <PageBanner
                pageTitle="Gallery" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Gallery" 
            />

            <section className="gallery-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                    >
                                        <img src="/img/gallery/gallery1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                    >
                                        <img src="/img/gallery/gallery2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                    >
                                        <img src="/img/gallery/gallery3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                    >
                                        <img src="/img/gallery/gallery4.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                    >
                                        <img src="/img/gallery/gallery5.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                    >
                                        <img src="/img/gallery/gallery6.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                    >
                                        <img src="/img/gallery/gallery7.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                    >
                                        <img src="/img/gallery/gallery8.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/img/gallery/gallery9.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </section>
            
            <Footer />
        </>
    );
}

export default Gallery;