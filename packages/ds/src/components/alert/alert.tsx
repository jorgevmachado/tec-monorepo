import React from 'react';

import { joinClass } from '../../utils';

import Icon from '../../elements/icon';

import { AlertProps } from './interface';

import './Alert.scss';

export default function Alert({ 
    type,
    link,
    onClose,
    children,
    hasCloseButton,
    ...props
}: AlertProps) {

    const classNameList = joinClass([
        'alert',
        `alert__type--${type}`,
        `${hasCloseButton ? 'alert__borderless' : ''}`
    ]);
    return (
        <div {...props} className={classNameList}>
            <Icon icon={type} className="alert__icon--title" />
            <div className="alert__content">
                { children }
                { link && ( <span className="alert__content--link" onClick={link.clickAction}> {link.text} </span> )}
            </div>
            { hasCloseButton && ( <Icon icon="close" className="alert__icon--close" onClick={onClose} /> ) }
        </div>
    );
};
