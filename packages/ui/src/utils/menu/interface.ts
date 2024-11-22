import React from 'react';
import { TIcon } from '@tec/ds';

interface MenuItem {
    key: string;
    icon?: React.ReactNode | TIcon;
    label: string;
    items?: Array<MenuItem>;
    counter?: number;
    onRedirect?: () => void;
}

export interface Menu {
    key: 'navbar' | 'sidebar';
    items: Array<MenuItem>
}