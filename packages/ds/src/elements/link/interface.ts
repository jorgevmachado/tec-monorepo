import React from 'react';

import { TColors, TContext, TIcon, TIconPosition, TSimplySIze, TWeight } from '../../utils';

export type TAppearance =
    | 'menu'
    | 'standard';

export const OAppearance: Array<TAppearance> = ['menu', 'standard'];

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    icon?: React.ReactNode | TIcon;
    size?: TSimplySIze;
    weight?: TWeight;
    context?: TContext;
    children: React.ReactNode;
    iconColor?: TColors;
    appearance?: TAppearance;
    iconPosition?: TIconPosition;
    iconClassName?: string;
    notificationColor?: TColors;
    notificationCounter?: number;
    notificationClassName?: string;
    notificationBackgroundColor?: TColors;
}