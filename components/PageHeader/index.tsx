import React from 'react';

import PageHeaderNavigation from './components/Navigation';
import PageHeaderTopLevel from './components/TopLevel';

import {IPageHeader} from './types/IPageHeader';

import style from './style.module.scss';

export default function PageHeader(props: IPageHeader) {
    const {} = props;

    return (
        <header className={style.global_header}>
            <PageHeaderTopLevel />
            <PageHeaderNavigation />
        </header>
    );
}
