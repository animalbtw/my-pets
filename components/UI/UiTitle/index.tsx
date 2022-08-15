import React from 'react';
import {titleType} from './constants/TitleType';

import {IUiTitle} from './types/IUiTitle';

import {getClassNames} from '../../../utils/stringHelper';

import style from './style.module.scss';

export default function UiTitle(props: IUiTitle) {
    const {
        type,
        className = '',
        tag,
        children,
    } = props;

    const elemClassName = getClassNames([style.nmTitle, className, `${style[`nmTitle_${type}`]}`]);

    if (tag === 'h1') {
        return (
            <h1 className={elemClassName}>
                {children}
            </h1>
        );
    }

    if (tag === 'h2') {
        return (
            <h2 className={elemClassName}>
                {children}
            </h2>
        );
    }

    return (
        <div className={elemClassName}>
            {children}
        </div>
    );

}
