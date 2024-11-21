import React from 'react';

import type { AuthLink } from '../interface';

import { Text } from '@tec/ds/elements';

import { Link } from '@tec/ds/components';

interface ActionLinkProps extends AuthLink {
    className?: string;
}

export default function ActionLink({
    title,
    label,
    context = 'neutral',
    className = '',
    clickAction,
}: ActionLinkProps ) {
    return (
        <div className={className}>
            {title && (
                <Text color={`${context}-100`}>{title}</Text>
            )}
            <Link
                onClick={clickAction}
                context={context}>
                {label}
            </Link>
        </div>
    );
}