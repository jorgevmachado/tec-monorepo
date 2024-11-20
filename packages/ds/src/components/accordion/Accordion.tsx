import React, { useEffect, useState } from 'react';

import { TContext, joinClass, useGenerateComponentId } from '../../utils';

import Icon from '../../elements/icon';
import Text from '../../elements/text';

import './Accordion.scss';

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement>{
    title: string;
    isOpen?: boolean;
    context?: TContext;
    children: React.ReactNode;
    disabled?: boolean;
    iconFormat?: 'small' | 'big';
    isBorderless?: boolean;
    childrenTitle?: React.ReactNode;
}

export default function Accordion({
    title,
    isOpen,
    context = 'neutral',
    children,
    disabled,
    iconFormat = 'small',
    isBorderless,
    childrenTitle,
    ...props
}: AccordionProps) {

    const [isOpenModel, setIsOpenModel] = useState(isOpen);

    const componentId = useGenerateComponentId(title);
    
    const classNameList = joinClass([
        'accordion',
        `${isBorderless ? 'accordion__borderless' : ''}`,
        `accordion__context--${context}`,
        `${isOpenModel ? 'accordion__open' : ''}`,
        `${disabled ? 'accordion__disabled' : ''}`,
    ]);

    const toggleOpen = () => setIsOpenModel((open) => !open);

    useEffect(() => {
        setIsOpenModel(isOpen);
    }, [isOpen]);

    return (
        <div {...props} tabIndex={disabled ? -1 : 0} className={classNameList}>
            <button 
                    id={`${componentId}-accordion-button`}
                    type="button"
                    onClick={toggleOpen}
                    tabIndex={-1}
                    disabled={disabled}
                    className="accordion__button"
                    aria-expanded={isOpenModel}
                    aria-controls={`${componentId}-accordion-button-content`}>
                
                { childrenTitle ? (
                    <div className="accordion__button--title">{childrenTitle}</div>
                ) : (
                    <Text variant="regular" weight="bold">{title}</Text>
                ) }
                
                <Icon 
                    icon="arrow-down-outline"
                    size={iconFormat === 'big' ? '2em' : '1.5em'}
                    color={`${context}-80`}
                    className="accordion__button--arrow-icon"  />
            </button>
            <div
                id={`${componentId}-accordion-content`}
                role="region"
                className="accordion__content"
                aria-labelledby={`${componentId}-accordion-content`}>
                {children}
            </div>
        </div>
    );
};
