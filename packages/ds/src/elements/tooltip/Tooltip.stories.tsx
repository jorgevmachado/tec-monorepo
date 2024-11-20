import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OContext } from '../../utils';

import { OAlign } from './interface';

import Tooltip from './Tooltip';

const meta = {
    args: {
        align: 'bottom',
        title: 'title',
        context: 'neutral',
        content: 'Hello, this is a tooltip message',
        children: 'Default Tooltip',
    },
    title: 'Elements/Tooltip',
    argTypes: {
        align: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'bottom' },
            },
            options: OAlign,
            control: { type: 'select' },
        },
        title: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            control: { type: 'text' },
        },
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'neutral' },
            },
            options: OContext,
            control: { type: 'select' },
        },
        content: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
    },
    component: Tooltip,
    decorators: [(Story) => <div style={{
        height: '25vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}><Story/></div>]
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const BottomLeft: Story = {
    args: {
        align: 'bottom-left',
        context: 'info',
        children: 'Tooltip Bottom Left',
    },
};

export const BottomRight: Story = {
    args: {
        align: 'bottom-right',
        context: 'error',
        children: 'Tooltip Bottom Right',
    },
};

export const Top: Story = {
    args: {
        align: 'top',
        context: 'success',
        children: 'Tooltip Top',
    },
};

export const TopLeft: Story = {
    args: {
        align: 'top-left',
        context: 'attention',
        children: 'Tooltip Top Left',
    },
};

export const TopRight: Story = {
    args: {
        align: 'top-right',
        context: 'info',
        children: 'Tooltip Top Right',
    },
};

export const Right: Story = {
    args: {
        align: 'right',
        context: 'primary',
        children: 'Tooltip Right',
    },
};

export const Left: Story = {
    args: {
        align: 'left',
        context: 'secondary',
        children: 'Tooltip Left',
    },
};