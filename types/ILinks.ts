import {LINK} from '../constants/links';

export interface ILinks {
    id: number
    pageTitle: string
    href: keyof typeof LINK | string
}
