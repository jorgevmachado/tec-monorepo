import type { Menu } from './interface';

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
        {
            key: 'profile',
            label: 'Profile',
            items: [
                {
                    key: 'profile',
                    icon: 'user',
                    label: 'My data',
                    onRedirect: () =>  alert('Open Page Profile')
                },
            ],
        },
        {
            key: 'logout',
            label: '',
            items: [
                {
                    icon: 'exit',
                    key: 'logout',
                    label: 'Logout',
                    onRedirect: () =>  alert('Logout')
                }
            ]
        }
    ]
};

export const MENUS: Array<Menu> = [
    NAVBAR,
    SIDEBAR
];