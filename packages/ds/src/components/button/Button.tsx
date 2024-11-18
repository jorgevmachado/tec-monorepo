import React, { useEffect } from 'react';

import { joinClass } from '../../utils';

import Icon from '../../elements/icon';

import type { ButtonProps } from './interface';

import './Button.scss';

export default function Button({
    icon,
    size = 'medium',
    fluid,
    focus = false,
    weight = 'normal',
    rounded,
    context = 'neutral',
    children,
    disabled,
    iconSize = '1em',
    appearance = 'standard',
    iconPosition = 'left',
    iconClassName,
    notificationColor,
    notificationCounter,
    notificationClassName,
    notificationBackgroundColor,
    ...props
    }: ButtonProps) {

    const hasLabel = Boolean(children);

    const isAppearanceIconButton = appearance === 'iconButton';

    useEffect(() => {
        if (!hasLabel && !props['aria-label']) {
            throw new Error(
                'You must define the aria-label if the button has no label'
            );
        }
    }, []);

    const classNameList = joinClass([
        'button',
        `button__size--${size}`,
        `${fluid ? 'button__fluid' : ''}`,
        `${focus ? 'button__focus' : ''}`,
        `button__weight--${weight}`,
        `${rounded ? 'button__rounded' : ''}`,
        `button__context--${context}`,
        `${!hasLabel ? 'button__no-label' : ''}`,
        `button__appearance--${appearance}`,
        `${props.className ?? ''}`
    ]);

    const iconClassNameList = joinClass([
        `${!isAppearanceIconButton ? `button__icon--position-${iconPosition}` : ''}`,
        `${iconClassName ?? ''}`
    ]);

    const notificationCounterClassNameList = joinClass([
        'button__content--notification-counter',
        `${notificationColor ? `ds-color-${notificationColor}` : 'ds-color-white'} `,
        `${notificationBackgroundColor ? `ds-bg-${notificationBackgroundColor}` : 'ds-bg-error-80'} `,
        `${notificationClassName ?? ''}`
    ]);
    
    return (
        <button {...props} disabled={disabled} className={classNameList}>
            {
                !isAppearanceIconButton 
                    ? (
                        <div className="button__content">
                            { icon && iconPosition === 'left' && ( <Icon icon={icon} size={iconSize} className={iconClassNameList}/> )}
                            <>
                                <div>{children}</div>
                                { notificationCounter && (
                                    <div className="button__content--notification">
                                        { notificationCounter && (
                                            <div className={notificationCounterClassNameList}>
                                                {notificationCounter > 9 ? '9+' : notificationCounter}
                                            </div>
                                        )}
                                    </div>
                                ) }
                            </>
                            { icon && iconPosition === 'right' && ( <Icon icon={icon} size={iconSize} className={iconClassNameList}/> )}
                        </div>
                    )
                    : ( <Icon icon={icon || 'react'} className={iconClassNameList}/> )
            }
        </button>
    );
};
