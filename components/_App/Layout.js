import React, { useState, useEffect } from 'react';
import Head from "next/head";
import GoTop from './GoTop';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios'
const Layout = ({ children, url }) => {
    const [data, setData] = useState(null)
    const getData = async () => {
      
        await axios.get(`${url}/get_settings`).then((res) => {
            setData(res.data)

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

                <title>Tarn - IT Business Startup & Agency React Next Template</title>
                <meta
                    name="description"
                    content="Tarn - IT Business Startup & Agency React Next Template"
                />
            </Head>
            <Navbar data={data}/>
            {children}
            <Footer data={data}/>
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;