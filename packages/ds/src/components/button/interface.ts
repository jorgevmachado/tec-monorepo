import React from 'react';

import { TColors, TContext, TIcon, TIconPosition, TSimplySIze, TWeight } from '../../utils';

export type TAppearance =
    | 'sidebar'
    | 'outline'
    | 'standard'
    | 'borderless'
    | 'iconButton';

export const OAppearance: Array<TAppearance> = [
    'sidebar',
    'outline',
    'standard',
    'borderless',
    'iconButton'
];

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode | TIcon;
    size?: TSimplySIze;
    fluid?: boolean;
    focus?: boolean;
    weight?: TWeight;
    rounded?: boolean;
    context?: TContext;
    children?: React.ReactNode;
    disabled?: boolean;
    iconSize?: string | number;
    appearance?: TAppearance;
    iconPosition?: TIconPosition;
    iconClassName?: string;
    notificationColor?: TColors;
    notificationCounter?: number;
    notificationClassName?: string;
    notificationBackgroundColor?: TColors;
}