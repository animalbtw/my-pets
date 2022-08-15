import {ILinks} from '../types/ILinks';

export const LINK = {
    HOME: '/',
    ANIMALS: '/animals',
    MATERIALS: '/materials',
    ABOUT_US: '/about-us',
    PARTNERS: '/partners',
    CONTACTS: '/contacts',
    VOLUNTEER:  '/volunteer',
    LOST_ANIMALS: '/lost',
    RULES_IN: '/rules-in',
    RULES_OUT: '/rules-out',
};

export const navigationLinks: ILinks[] = [ // id also mean position in sequence
    {
        id: 1,
        pageTitle: 'Главная',
        href: LINK.HOME,
    },
    {
        id: 2,
        pageTitle: 'Наши питомцы',
        href: LINK.ANIMALS,
    },
    {
        id: 3,
        pageTitle: 'Наши нужды',
        href: LINK.MATERIALS,
    },
    {
        id: 4,
        pageTitle: 'О нас',
        href: LINK.ABOUT_US,
    },
    {
        id: 5,
        pageTitle: 'Наши друзья',
        href: LINK.PARTNERS,
    },
    {
        id: 6,
        pageTitle: 'Контакты',
        href: LINK.CONTACTS,
    },
];
