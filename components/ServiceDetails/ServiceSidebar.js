import React from 'react';
import Link from 'next/link';

const ServiceSidebar = ({ dataReated }) => {
    return (
        <div className="services-details-info">
            <ul className="services-list">
                {dataReated?.map((item) => {
                    return <li>
                        <Link href={`/show-service/${item?.slug}`}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                })}

            </ul>
         
        </div>
    )
}

export default ServiceSidebar;