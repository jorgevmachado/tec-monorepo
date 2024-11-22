import React from 'react';

import { Text } from '@tec/ds';

import './PageContent.scss';


interface PageProps {
    title?: string;
    children: React.ReactNode;
}

export default function PageContent({ title, children }: PageProps) {
    return (
        <div className="page-content">
            {title && <Text tag="h1" weight="bold" variant="xlarge">{title}</Text>}
            <div>
                {children}
            </div>
        </div>
    );
};
