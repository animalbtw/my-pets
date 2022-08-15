import React from 'react';

import PageHeaderNavigationLink from './components/Link';

import {navigationLinks} from '../../../../constants/links';

import {IPageHeaderNavigation} from './types/IPageHeaderNavigation';

import {linksSequenceSort} from '../../../../utils/arrayHelper';

import style from './style.module.scss';

export default function PageHeaderNavigation(props: IPageHeaderNavigation) {
    const {} = props;

    return (
        <div className={style.bottom_header}>
            <nav className={style.global_navigation}>
                {
                    linksSequenceSort(navigationLinks).map(({pageTitle, href, id}) => (
                        <PageHeaderNavigationLink
                            pageTitle={pageTitle}
                            href={href}
                            key={id}
                            className={style.navigation_link}
                        />
                    ))
                }
            </nav>
        </div>
    );
}
