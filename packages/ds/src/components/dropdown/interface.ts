import React from 'react';

import { TContext } from '../../utils';

export type TAppearance =
    | 'navbar'
    | 'sidebar'
    | 'standard';

export type TDropdown =
    | 'link'
    | 'button'

export const OAppearance: Array<TAppearance> = [
    'navbar',
    'sidebar',
    'standard'
];


export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: TDropdown;
    label?: string;
    isOpen?: boolean;
    context?: TContext;
    disabled?: boolean;
    children?: React.ReactNode;
    activator?: React.ReactNode;
    appearance?: TAppearance;
    onClickOutside?: (value: boolean) => void;
    onDropDownClick?: (value: boolean) => void;
}