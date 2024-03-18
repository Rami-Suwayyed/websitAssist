import React, { useState, useEffect } from 'react';
import Head from "next/head";
import GoTop from './GoTop';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios'
import { useTranslation } from 'react-i18next';
import Spinner from '../Loading/Spinner';
import { useLoading } from '../../store/index';

const Layout = ({ children, url }) => {
    const [data, setData] = useState(null);
    const { isLoading, setLoading} = useLoading();

    const { t } = useTranslation();
    const getData = async () => {
        setLoading(true)
        await axios.get(`${url}/get_settings`).then((res) => {
            setData(res.data) 
            setLoading(false)
        }).catch((err) => {

        })
    }
    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>{t("Digital Assistech")}
                </title>
                <meta
                    name="description"
                    content="digital assistech
 "
                />
            </Head>
            {isLoading && <Spinner />}
            <Navbar data={data} />
            {children}
            <Footer data={data} url={url} />
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;