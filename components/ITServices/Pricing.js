import React from 'react';
import Link from 'next/link';

const Pricing = () => {
    return (
        <div className="membership-levels-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src="/img/star-icon.png" alt="image" /> 
                        Pricing
                    </span>
                    <h2>Pricing Plans</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="membership-levels-table table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th>
                                    <span className="price">$15.00</span>
                                    <span className="title">Basic Plan</span>
                                    <span className="desc">/Monthly</span>
                                </th>
                                <th>
                                    <span className="price">$35.00</span>
                                    <span className="title">Advanced Plan</span>
                                    <span className="desc">/Monthly</span>
                                </th>
                                <th>
                                    <span className="price">$65.00</span>
                                    <span className="title">Expert Plan</span>
                                    <span className="desc">/Monthly</span>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Number of features</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href="#">
                                        <a>5 GB Bandwidth</a>
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href="#">
                                        <a>Highest Speed</a>
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href="#">
                                        <a>1 GB Storage</a>
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href="#">
                                        <a>Unlimited Website</a>
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href="#">
                                        <a>Unlimited Users</a>
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href="#">
                                        <a>24x7 Great Support</a>
                                    </Link>
                                </td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href="#">
                                        <a>Data Security and Backups</a>
                                    </Link>
                                </td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td>
                                    <Link href="#">
                                        <a>Monthly Reports and Analytics</a>
                                    </Link>
                                </td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-none"><i className='bx bx-x'></i></td>
                                <td className="item-check"><i className='bx bx-check'></i></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <Link href="#">
                                        <a className="select-btn">Get it now</a>
                                    </Link>
                                </td>
                                <td>
                                    <Link href="#">
                                        <a className="select-btn">Get it now</a>
                                    </Link>
                                </td>
                                <td>
                                    <Link href="#">
                                        <a className="select-btn">Get it now</a>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Pricing;