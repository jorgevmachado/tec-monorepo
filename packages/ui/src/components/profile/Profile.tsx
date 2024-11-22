import React from 'react';

import { TContext, joinClass } from '@tec/ds/utils';

import { Text } from '@tec/ds/elements';

import { Avatar, Link } from '@tec/ds/components';

import { type Menu } from '../../utils';

import './Profile.scss';

interface ProfileProps {
    name?: string;
    email?: string;
    picture?: string;
    context?: TContext;
    children: React.ReactNode;
    className?: string;
    profileMenu?: Menu['items'][number];
}

export default function Profile({
    name,
    email,
    picture,
    context,
    children,
    className,
    profileMenu
}: ProfileProps) {
    
    const classNameList = joinClass([
        'profile',
        `${context ? `profile__context--${context}` : ''}`,
        `${className ? className : ''}`
    ]);
    
    return (
        <div className={classNameList}>
            {children}
            <div className="profile__info">
                { (name || picture) && (
                    <Avatar
                        src={picture}
                        size="large"    
                        name={name ?? 'username'}
                        initialsLength={2}
                    />
                )}
                <div>
                    {name && (
                        <Text color="white" variant="medium" weight="bold" className="profile__info--name" >
                            {name}
                        </Text>
                    )}
                    {name && (
                        <Text color="white" variant="regular" className="profile__info--email">
                            <span>{email}</span>
                        </Text>
                    )}
                    {profileMenu && (
                        <Link
                            icon="arrow-right"
                            onClick={profileMenu.onRedirect}
                            className="profile__info--link"
                            iconPosition="right">
                            {profileMenu.label}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};
