import React from 'react';

import { joinClass } from '../../utils';

import Text from '../../elements/text';

import './Label.scss';

interface LabelProps extends React.HTMLProps<HTMLDivElement> {
    tip?: string;
    label?: string;
    componentId?: string;
}

export default function Label({
    tip,
    label,
    componentId,
    className,
    ...props
}: LabelProps) {
    const tag = componentId ? 'label' : 'legend';
    
    const classNameList = joinClass([
        'label',
        className
    ]);
    
    return (
        <div {...props} className={classNameList}>
            {
                label && (
                    <Text tag={tag} htmlFor={componentId} className="label__text">
                        {label}
                    </Text>
                )
            }
            {
                tip && (
                    <Text tag="span" color="neutral-90" className="label__tip" variant="small">
                        {tip}
                    </Text>
                )
            }
        </div>
    );
};
