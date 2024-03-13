import React, { useState, useEffect } from 'react';
import PageBanner from '../../components/Common/PageBanner';
import ServiceDetailsContent from '../../components/ServiceDetails/ServiceDetailsContent';
import RelatedServices from '../../components/ServiceDetails/RelatedServices';
import { useRouter } from 'next/router';
import axios from 'axios';

const ServiceDetails = ({ url }) => {
    const [dataReated, setDataReated] = useState(null);
    const getDataReated = async () => {
        await axios.get(`${url}/get_services`).then((res) => {
            setDataReated(res.data?.data);

        }).catch((err) => console.log(err))
    }

    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState(null);
    const getServers = async (id) => {
        await axios.get(`${url}/get_modules/${id}`).then((res)=>{
            setData(res.data?.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        if(id){
            getServers(id);
        }
        getDataReated();

    },[id])
    return (
        <>
            <PageBanner
                pageTitle="Service Details"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Service Details"
            />

            <ServiceDetailsContent data={data} dataReated={dataReated}/>

            <RelatedServices data={dataReated}/>
        </>
    );
}

export default ServiceDetails;