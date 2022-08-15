import React from 'react';
import Link from 'next/link';

import {IPageHeaderNavigationLink} from './types/IPageHeaderNavigationLink';

export default function PageHeaderNavigationLink(props: IPageHeaderNavigationLink) {
    const {
        pageTitle,
        href,
        className,
    } = props;

    return (
        <Link
            href={href}
        >
            <a
                className={className}
                href={href}
            >
                {pageTitle}
            </a>
        </Link>
    );
}
