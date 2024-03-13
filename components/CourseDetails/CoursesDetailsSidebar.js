import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const CoursesDetailsSidebar = () => {

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

            <div className="courses-details-info">
                <div className="image">
                    <img src="/img/courses/course1.jpg" alt="image" />
                    
                    <Link href="#play-video">
                        <a
                            onClick={e => {e.preventDefault(); openModal()}}
                            className="link-btn popup-youtube"
                        ></a>
                    </Link>

                    <div className="content">
                        <i className="flaticon-google-play"></i>
                        <span>Course Preview</span>
                    </div>
                </div>

                <ul className="info">
                    <li className="price">
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-price-tag"></i> Price</span>
                            $49
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-teacher"></i> Instructor</span>
                            Sarah Taylor
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-stopwatch"></i> Duration</span>
                            7 weeks
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-distance-education"></i> Lessons</span>
                            25
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-web"></i> Enrolled</span>
                            255 students
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="flaticon-open-padlock"></i> Access</span>
                            Lifetime
                        </div>
                    </li>
                </ul>

                <div className="btn-box">
                    <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-shopping-basket"></i> 
                            Add to Cart <span></span>
                        </a>
                    </Link>
                    <Link href="#">
                        <a className="default-btn">
                            <i className="flaticon-price-tag"></i> 
                            Buy Now <span></span>
                        </a>
                    </Link>
                </div>

                <div className="courses-share">
                    <div className="share-info">
                        <span>Share This Course <i className="flaticon-share"></i></span>

                        <ul className="social-link">
                            <li>
                                <a href="https://www.facebook.com/" className="d-block" target="_blank">
                                    <i className='bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com/" className="d-block" target="_blank">
                                    <i className='bx bxl-twitter'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" className="d-block" target="_blank">
                                    <i className='bx bxl-instagram'></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/" className="d-block" target="_blank">
                                    <i className='bx bxl-linkedin'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesDetailsSidebar;