import React from 'react';
import Image from 'next/image';

import PageHeaderTopLevelTitleBlock from './components/TitleBlock';
import PageHeaderTopLevelContacts from './components/Contacts';

import logotype from '../../../../images/logotypes/logo.png';

import style from './style.module.scss';

export default function PageHeaderTopLevel() {

    return (
        <div className={style.top_header}>
            <div className={style.logo}>
                <Image
                    layout={'fill'}
                    src={logotype}
                    alt={'logo'}
                    title={'Кострома. Право на жизнь'}
                />
            </div>
            <PageHeaderTopLevelTitleBlock />
            <PageHeaderTopLevelContacts />
        </div>
    );
}
