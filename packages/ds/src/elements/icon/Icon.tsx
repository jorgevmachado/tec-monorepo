import React from 'react';

import { type TColors, type TIcon, joinClass } from '../../utils';

import { getIcon } from './options';

import './Icon.scss';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    readonly icon: React.ReactNode | TIcon;
    readonly size?: string | number;
    readonly color?: TColors;
}

export default function Icon({ icon, size, color, ...props }: IconProps) {
    const classNameList = joinClass([
        'icon',
        `${color ? `ds-color-${color}` : ''}`,
        `${props.className ? props.className : ''}`
    ]);

    const currentIcon =  typeof icon === 'string' ? getIcon(icon as TIcon, size, color) : icon;
    
return ( <span {...props} className={classNameList}>{currentIcon}</span> );
};
