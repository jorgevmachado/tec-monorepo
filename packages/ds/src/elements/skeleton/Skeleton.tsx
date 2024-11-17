import React from 'react';

import { joinClass } from '../../utils';

import './Skeleton.scss';

export type TRadius = 'none' | 'small' | 'regular' | 'large' | 'rounded' | 'circle';

export const ORadius: Array<TRadius> = ['none' , 'small' , 'regular' , 'large' , 'rounded' , 'circle'];

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
    radius?: TRadius;
    height?: string;
    freeWidth?: string;
    freeHeight?: string;
}

export default function Skeleton({
    width = '40',
    radius = 'none',
    height = '40',
    freeWidth,
    freeHeight,
    ...props
}: SkeletonProps) {

    const classList = joinClass([
        `skeleton__radius--${radius}`,
        props.className
    ]);
    return (
        <div
            {...props}
            style={{width: freeWidth, height: freeHeight}}
            className="skeleton"
            data-testid="skeleton">
            <div
                style={{
                    width: freeWidth || `${width}px`,
                    height: freeHeight || `${height}px`,
                }}
                className={classList}>

            </div>
        </div>
    );
};
