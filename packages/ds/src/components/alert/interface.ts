import React from 'react';

export type TAlert = 'info' | 'lamp' | 'error' | 'warning' | 'success';

export const OAlert: Array<TAlert> = ['info' , 'lamp' , 'error' , 'warning' , 'success'];

export interface LinkProps {
    text: string;
    clickAction: () => void;
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    type: TAlert;
    link?: LinkProps;
    onClose?: () => void;
    children: React.ReactNode;
    hasCloseButton?: boolean;
}