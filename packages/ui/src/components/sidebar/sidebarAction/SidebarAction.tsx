import React from 'react';

import { Menu } from '../../../utils';

import { TContext, TIcon } from '@tec/ds/utils';

import { Button, Dropdown } from '@tec/ds/components';

export interface SidebarActionProps {
    icon?: TIcon;
    path?: string;
    label: string;
    items?: Menu['items'];
    context?: TContext;
    counter?: number;
    className?: string;
    onRedirect?: () => void;
}

export default function SidebarAction({
    icon,
    label,
    items,
    context,
    counter,
    className,
    onRedirect,
}: SidebarActionProps ) {
    const type =  !items?.length ? 'button' : 'dropdown';
    
    return (
        <li className={className}>
            { type !== 'button' 
                ? (
                    <Dropdown label={label} type="button" context={context} appearance="sidebar">
                        {
                            items?.map((item) => (
                                <Button
                                    key={item.key}
                                    context={context}
                                    onClick={item.onRedirect}
                                    appearance="sidebar"
                                    iconPosition="left">
                                    {item.label}
                                </Button>
                            ))
                        }
                    </Dropdown>
                ) 
                : (
                    <Button
                        icon={icon}
                        context={context}
                        onClick={onRedirect}
                        appearance="sidebar"
                        iconPosition="left"
                        notificationCounter={counter}>
                        {label}
                    </Button>
                ) 
            }
        </li>
    );
}