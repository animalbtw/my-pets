import Image from 'next/image';
import React from 'react';

import dog from '../../../../../../images/icons/curdog.svg';
import cat from '../../../../../../images/icons/curcat.svg';

import style from './style.module.scss';

export default function PageHeaderTopLevelContacts() {
    return (
        <div className={style.contacts_wrapper}>
            <div className={style.contact}>
            </div>
            <div className={style.contact}></div>
        </div>
    );
}
