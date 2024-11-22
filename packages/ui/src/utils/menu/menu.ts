import type { Menu } from './interface';

export const FAVORITE: Menu['items'][number] = {
    key: 'favorite',
    label: 'Favorite',
    items: [{
        key: 'favorite',
        icon: 'like',
        label: 'Favorite',
        onRedirect: () =>  alert('Open Page Favorite')
    }]
};

export const ASSOCIATE_MENU: Menu['items'][number] = {
    key: 'associate',
    label: 'Associate',
    items: [
        {
            key: 'natural-person',
            icon: 'user',
            label: 'Natural Person',
            onRedirect: () =>  alert('Open Page Natural Person')
        },
        {
            key: 'legal-entity',
            icon: 'document',
            label: 'Legal entity',
            onRedirect: () =>  alert('Open Page Legal entity')
        }
    ]
};

export const PROFILE_MENU: Menu['items'][number] = {
    key: 'profile',
    label: 'Profile',
    items: [{
        key: 'profile',
        icon: 'user',
        label: 'My data',
        onRedirect: () =>  alert('Open Page Profile')
    }],
};

export const LOGOUT_MENU: Menu['items'][number] = {
    key: 'logout',
    icon: 'exit',
    label: 'logout',
    onRedirect: () =>  alert('Logout')
};

export const NAVBAR: Menu = {
    key: 'navbar',
    items: [
        {
            key: 'about',
            label: 'About',
            onRedirect: () =>  alert('Open Page About')
        },
        {
            key: 'help',
            label: 'Help',
            onRedirect: () =>  alert('Open Page Help')
        },
        {
            key: 'options',
            label: 'Options',
            items: [
                {
                    key: 'option1',
                    label: 'Option 1',
                    onRedirect: () =>  alert('Open Page Option 1')
                },
                {
                    key: 'option2',
                    label: 'Option 2',
                    onRedirect: () =>  alert('Open Page Option 2')
                }
            ]
        }
    ]
};

export const SIDEBAR: Menu = {
    key: 'sidebar',
    items: [
        PROFILE_MENU,
        FAVORITE
    ]
};

export const MENUS: Array<Menu> = [
    NAVBAR,
    SIDEBAR
];