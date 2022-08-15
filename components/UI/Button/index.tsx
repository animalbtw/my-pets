import React from 'react';

import {BUTTON_SIZE, BUTTON_TYPE} from './constants/buttonOptions';

import {IUiButton} from './types/IUiButton';

import {getClassNames} from '../../../utils/stringHelper';

import style from './style.module.scss';

export default function UiButton(props: IUiButton) {
    const {
        text,
        onClick,
        isDisabled,
        size = BUTTON_SIZE.MD,
        type = BUTTON_TYPE.PRIAMRY,
    } = props;

    return (
        <button
            onClick={onClick}
            disabled={isDisabled}
            className={getClassNames([
                style.button,
                style[size],
                style[type],
            ])}
        >
            {text}
        </button>
    );
}
