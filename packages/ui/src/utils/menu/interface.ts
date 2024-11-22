import React from 'react';
import { TIcon } from '@tec/ds';

interface MenuItem {
    key: string;
    icon?: TIcon;
    label: string;
    items?: Array<MenuItem>;
    counter?: number;
    onRedirect?: () => void;
}

export interface Menu {
    key: 'navbar' | 'sidebar';
    items: Array<MenuItem>
}

export interface Logo extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    alt: string;
    title: string;
    width?: number;
    height?: number;
}