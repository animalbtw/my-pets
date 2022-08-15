import React from 'react';

import UiTitle from '../../../../../UI/UiTitle';

import style from './style.module.scss';

// Todo: connect with strapi
export default function PageHeaderTopLevelTitleBlock() {
    return (
        <div className={style.title_block}>
            <UiTitle
                tag={'h1'}
                type={'h1'}
            >
                    Право на жизнь
            </UiTitle>
            <UiTitle
                tag={'h2'}
                type={'h2'}
            >
                    Костромская региональная общественная организации помощи животным
            </UiTitle>
        </div>
    );
}
