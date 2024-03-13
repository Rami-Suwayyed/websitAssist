import React, { useState } from 'react';
import { useRecoilState } from 'recoil'
import { collapsedState } from '../../utils/recoil-atoms'
import LinkN from '../../utils/ActiveLink';

const Navbar = ({data}) => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState);
    const [selecLan, setLan] = useState("");

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window?.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window?.scrollTo(0, 0);
        // const lang = document.getElementsByTagName("body");
        // if (selecLan === "AR") {
             
        // }
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light navContainer">
                            <LinkN href="/">
                                <a onClick={() => setCollapsed(true)} className="navbar-brand">
                                    <img src={data?.data?.header_icon} alt="logo" height="100px" className="logoAssist" />
                                </a>
                            </LinkN>
                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>
                            <ul className={`${classOne} navbar-nav navList`} id="navbarSupportedContent">
                                <li className="nav-item">
                                    <LinkN href="/" activeClassName="active">
                                        <a onClick={() => setCollapsed(true)} className="nav-LinkN">
                                            Home
                                        </a>
                                    </LinkN>


                                </li>

                                <li className="nav-item">
                                    <LinkN href="/about-us" activeClassName="active">
                                        <a onClick={() => setCollapsed(true)} className="nav-LinkN">
                                            About Us
                                        </a>
                                    </LinkN>
                                </li>

                                <li className="nav-item">
                                    <LinkN href="#service_section" >
                                        <a className='servicesItem'>
                                            Services
                                        </a>
                                    </LinkN>

                                </li>

                                {/* <li className="nav-item">
                                        <LinkN href="#" activeClassName="active">
                                            <a onClick={e => e.preventDefault()} className="nav-LinkN">
                                                Case Studies <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </LinkN>
                                        
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <LinkN href="/case-studies-2-columns" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Case Studies 2 Columns</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/case-studies-3-columns" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Case Studies 3 Columns</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/case-studies-4-columns" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">
                                                        Case Studies 4 Columns
                                                    </a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/case-studies-details" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Case Studies Details</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/case-studies-details-two" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">With Image Slider Details</a>
                                                </LinkN>
                                            </li>
                                        </ul>
                                    </li> */}

                                <li className="nav-item">
                                    <LinkN href="/contact">
                                        <a className="nav-LinkN" onClick={() => setCollapsed(true)}>
                                            Contact
                                        </a>
                                    </LinkN>

                                    {/* <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <LinkN href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-LinkN">
                                                        Courses <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </LinkN>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <LinkN href="/courses-grid" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-LinkN">Courses Grid</a>
                                                        </LinkN>
                                                    </li>

                                                    <li className="nav-item">
                                                        <LinkN href="/courses-right-sidebar" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-LinkN">Courses Right Sidebar</a>
                                                        </LinkN>
                                                    </li>

                                                    <li className="nav-item">
                                                        <LinkN href="/course-details" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-LinkN">Course Details</a>
                                                        </LinkN>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="#">
                                                    <a onClick={e => e.preventDefault()} className="nav-LinkN">
                                                        Events <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </LinkN>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <LinkN href="/events" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-LinkN">Events</a>
                                                        </LinkN>
                                                    </li>

                                                    <li className="nav-item">
                                                        <LinkN href="/event-details" activeClassName="active">
                                                            <a onClick={() => setCollapsed(true)} className="nav-LinkN">Event Details</a>
                                                        </LinkN>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/contact" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Contact</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/gallery" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Gallery</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/faq" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">FAQ</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/coming-soon" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Coming Soon</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/membership-levels" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Membership Levels</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/profile-authentication" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Login/Register</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/privacy-policy" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Privacy Policy</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/terms-of-service" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Terms of Service</a>
                                                </LinkN>
                                            </li>
                                        </ul> */}
                                </li>

                                {/* <li className="nav-item">
                                        <LinkN href="#">
                                            <a onClick={e => e.preventDefault()} className="nav-LinkN">
                                                Blog <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </LinkN>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <LinkN href="/blog" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Blog Grid</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/blog2" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Blog Right Sidebar</a>
                                                </LinkN>
                                            </li>

                                            <li className="nav-item">
                                                <LinkN href="/blog-details" activeClassName="active">
                                                    <a onClick={() => setCollapsed(true)} className="nav-LinkN">Blog Details</a>
                                                </LinkN>
                                            </li>
                                        </ul>
                                    </li> */}
                            </ul>
                            <div  >


                                <div className="others-option d-flex align-items-center">
                                    {/* <div className="option-item">
                                        <form className="search-box">
                                            <input type="text" className="input-search" placeholder="Search for anything" />
                                            <button type="submit">
                                                <i className="flaticon-loupe"></i>
                                            </button>
                                        </form>
                                    </div> */}

                                    <div className="option-item getStartedButton">
                                        <select className="selectLan" onChange={(e) => setLan(e.target.value)}>
                                            <option>EN</option>
                                            <option>AR</option>
                                        </select>
                                        <LinkN href="/contact">
                                            <a onClick={() => setCollapsed(true)} className="default-btn">
                                                <i className="flaticon-right"></i> Get Started <span></span>
                                            </a>
                                        </LinkN>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
