import React from 'react';

import { TColors, TVariant, TWeight } from '../../utils';

export type TDisplay =  'ALL' | 'DESKTOP' | 'MOBILE';

export type TReplaceTextFlag = '++';

export interface TextProps  extends React.HTMLProps<Element> {
    readonly tag?: string;
    readonly color?: TColors;
    readonly weight?: TWeight;
    readonly display?: TDisplay;
    readonly variant?: TVariant;
    readonly htmlFor?: string;
    readonly children: React.ReactNode | string;
}

export interface FormattedText {
    cleaned: Array<string | React.JSX.Element>;
    replaced?: Array<string | React.JSX.Element>;
}

export interface FormatTextProps {
    readonly display?: TDisplay;
    readonly className?: string;
    readonly formattedText: FormattedText;
}