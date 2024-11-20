import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Label from './';

const meta = {
    args: {
        tip: '(Tip)',
        label: 'Label',
        componentId: 'label',
    },
    title: 'Components/Label',
    argTypes: {
        tip: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
        label: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
        componentId: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
    },
    component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};

export const TagLegend: Story = {
    args: {
        componentId: 'legend',
    }
};