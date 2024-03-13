import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const ExploreLearning = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        
            <div className="explore-learning-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="explore-learning-content">
                                <h2>Build Your Data Science Analytics Skills Online</h2>
                                <p>Want to learn and earn PDUs or CEUs on your schedule — anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses.</p>
                                <Link href="#">
                                    <a className="explore-learing-btn">Explore Learing</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="explore-learning-video">
                                <img src="/img/explore-learning.jpg" alt="image" />
 
                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); openModal()}}
                                        className="video-btn popup-youtube"
                                    > 
                                        <i className="flaticon-google-play"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreLearning;