import Head from 'next/head';
import React from 'react';

import PageFooter from '../PageFooter';
import PageHeader from '../PageHeader';

import {IPageContainer} from './types/IPageContainer';

import style from './style.module.scss';

export default function PageContainer(props: IPageContainer) {
    const {
        children,
        title,
    } = props;

    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <PageHeader />
            <main className={style.global_wrapper}>
                {
                    children
                }
            </main>
            <PageFooter />
        </>
    );
}
