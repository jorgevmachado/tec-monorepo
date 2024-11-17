import React from 'react';

import { type TContext, joinClass } from '../../utils';

import './Spinner.scss';


interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number;
    context?: TContext
}

export default function Spinner({ size = 32, context = 'primary', ...props }: SpinnerProps) {
    const classList = joinClass([
        'spinner',
        `spinner__context--${context}`
    ]);
    return (
        <div {...props} data-testid="spinner" className={classList}>
            <svg
                width={size}
                height={size}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M31 16C31 19.3289 29.8926 22.5632 27.8523 25.1936C25.812 27.824 22.9547 29.7009 19.7303 30.5287C16.506 31.3566 13.0979 31.0884 10.0428 29.7663C6.98766 28.4442 4.45912 26.1435 2.8554 23.2263C1.25168 20.3092 0.663918 16.9414 1.18467 13.6535C1.70543 10.3656 3.30512 7.34427 5.73179 5.06547C8.15846 2.78667 11.2742 1.37985 14.5884 1.06657C17.9025 0.753292 21.2267 1.55136 24.0374 3.33508"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};
