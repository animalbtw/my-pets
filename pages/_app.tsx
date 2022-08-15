import React from 'react';
import App, {AppContext, AppProps} from 'next/app';
import Head from 'next/head';

import '../styles/globals.scss';

const MyApp = ({Component, pageProps}: AppProps) => {

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );

};

MyApp.getInitialProps = async (appContext: AppContext) => {
    const appProps = await App.getInitialProps(appContext);
    return {
        ...appProps,
    };
};

export default MyApp;
