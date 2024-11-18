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