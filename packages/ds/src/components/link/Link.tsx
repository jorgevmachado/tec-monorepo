import React from 'react';

import { joinClass } from '../../utils';

import Icon from '../../elements/icon';

import type { LinkProps } from './interface';

import './Link.scss';

export default function Link({
    icon,
    size = 'medium',
    weight = 'normal',
    context = 'neutral',
    children,
    iconColor,
    className,
    appearance,
    iconPosition = 'left',
    iconClassName,
    notificationColor,
    notificationCounter,
    notificationClassName,
    notificationBackgroundColor,
    ...props
    }: LinkProps) {
    
    const classNameList = joinClass([
        'link',
        `link__context--${context}`,
        `link__size--${size}`,
        `link__weight--${weight}`,
        `link__appearance--${appearance}`,
        className
    ]);
    
    const iconClassNameList = joinClass([
        `link__icon--position-${iconPosition}`,
        `${iconColor ? `ds-color-${iconColor}` : ''} `,
        iconClassName
    ]);
    
    const notificationCounterClassNameList = joinClass([
        'link__content--notification-counter',
        `${notificationColor ? `ds-color-${notificationColor}` : 'ds-color-white'} `,
        `${notificationBackgroundColor ? `ds-bg-${notificationBackgroundColor}` : `ds-bg-${context}-80`} `,
        notificationClassName
    ]);
    
    return (
        <a {...props} className={classNameList}>
            <div className="link__content">
                { icon && iconPosition === 'left' && ( <Icon icon={icon} className={iconClassNameList}/> )}
                <>
                    <div>{children}</div>
                    { notificationCounter && (
                        <div className="link__content--notification">
                            <div className={notificationCounterClassNameList}>
                                {notificationCounter > 9 ? '9+' : notificationCounter}
                            </div>
                        </div>
                    )}
                </>
                {icon && iconPosition === 'right' && (<Icon icon={icon} className={iconClassNameList}/>)}
            </div>
        </a>
    );
};