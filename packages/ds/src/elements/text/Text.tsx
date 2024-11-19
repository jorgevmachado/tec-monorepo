import React from 'react';

import { isObject } from '@tec/services';

import type { FormatTextProps, TextProps } from './interface';
import { formatText, isReactNode } from './config';
import joinClass from '../../utils/join-class/joinClass';

import './Text.scss';


function FormatText({ display, className, formattedText }: FormatTextProps) {
    if (!formattedText.replaced) {
        return <span key={display} className={className}>{formattedText.cleaned}</span>;
    }

    if (!display || display === 'ALL') {
        return <span key={display} className={className}>{formattedText.replaced}</span>;
    }

    return <span key={display}>fuck</span>;

}

export default function Text({
    tag = 'p',
    color = 'neutral-90',
    weight = 'normal',
    display = 'ALL',
    variant = 'regular',
    htmlFor,
    children,
    className,
    ...props
}: TextProps) {

    const CustomTag = tag as React.ElementType;

    const formattedText = (isReactNode(children) || isObject(children))
        ? undefined
        : formatText(children as string);

    return (
        <CustomTag
            className={joinClass([
                'text',
                `ds-color-${color}`,
                `text__variant--${variant}`,
                `text__weight--${weight}`,
                className
            ])}
            htmlFor={htmlFor}
            {...props}>
            {
                !formattedText ? children : <FormatText display={display} formattedText={formattedText} />
            }
        </CustomTag>
    );
};
