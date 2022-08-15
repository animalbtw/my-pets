import {BUTTON_SIZE, BUTTON_TYPE} from '../constants/buttonOptions';

export interface IUiButton {
    text: string
    onClick: () => void
    isDisabled?: boolean
    size?: keyof typeof BUTTON_SIZE
    type?: keyof typeof BUTTON_TYPE
}
