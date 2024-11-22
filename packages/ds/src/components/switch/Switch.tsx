import React from 'react';

import { TContext, joinClass, useGenerateComponentId } from '../../utils';

import { Text } from '../../elements';

import './Switch.scss';

export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>{
    label: React.ReactNode;
    checked: boolean;
    context?: TContext;
    onChange?: (event: React.MouseEvent<HTMLElement>, checked: boolean) => void;
    disabled?: boolean;
}

export default function Switch({ 
    label,
    checked,
    context = 'neutral',
    onChange,
    disabled,
    ...props
}: SwitchProps) {

    const componentId = useGenerateComponentId('switch-');
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if (onChange) onChange(event, checked);
    };
    
    const classNameList = joinClass([
        'switch',
        `switch__context--${context}`,
        `${disabled ? 'switch__disabled' : ''}`
    ]);
    
    return (
        <div {...props} className={classNameList}>
            <button
                id={componentId}
                type="button"
                role="switch"
                onClick={handleClick}
                disabled={disabled}
                className="switch__button"
                aria-checked={checked}
                aria-labelledby={`${componentId}-label`}
            />
            <Text
                id={`${componentId}-label`}
                tag="label"
                htmlFor={componentId}
                className="switch__label">
                {label}
            </Text>
        </div>
    );
};
