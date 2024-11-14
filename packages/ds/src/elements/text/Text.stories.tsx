import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { OColors, OVariant, OWeight } from '../../utils';

import Text from './';

const meta = {
    args: {
        tag: 'p',
        color: 'neutral-90',
        weight: 'normal',
        display: 'ALL',
        variant: 'regular',
        htmlFor: undefined,
        children: 'Hello, World!',
    },
    title: 'Elements/Text',
    argTypes: {
        tag: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'p' },
            },
            options: [ 'p', 'span', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ],
            control: { type: 'select' },
            description: 'Tag HTML element example: p, h1, h2, h3, h4, h5, h6',
        },
        color: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'neutral-90' }
            },
            options: OColors,
            control: { type: 'select' },

        },
        weight: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'regular' },
            },
            options: OWeight,
            control: { type: 'select' },
        },
        variant: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'regular' },
            },
            options: OVariant,
            control: { type: 'select' },
        },
        htmlFor: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
        },
    },
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};

export const Variants: Story = {
    args: {},
    render: (args) => (
        <div style={{ display: 'flex',  flexDirection: 'column', gap: '8px' }}>
            <Text {...args} variant="xsmall">xsmall</Text>
            <Text {...args} variant="small">small</Text>
            <Text {...args} variant="regular">regular</Text>
            <Text {...args} variant="medium">medium</Text>
            <Text {...args} variant="large">large</Text>
            <Text {...args} variant="xlarge">xlarge</Text>
            <Text {...args} variant="big">big</Text>
            <Text {...args} variant="huge">huge</Text>
            <Text {...args} variant="giant">giant</Text>
        </div>
    )
};

export const Weight: Story = {
    args: {
        variant: 'large',
    },
    render: (args) => (
        <div style={{ display: 'flex',  flexDirection: 'column', gap: '8px' }}>
            <Text {...args} weight="normal">normal</Text>
            <Text {...args} weight="medium">medium</Text>
            <Text {...args} weight="semibold">semibold</Text>
            <Text {...args} weight="bold">bold</Text>
        </div>
    )
};

export const NextLine: Story = {
    args: {
        variant: 'large',
        children: 'Hello ++next line ++World'
    },
};

export const StrongPartText: Story = {
    args: {
        variant: 'large',
        children: 'Hello *strong* World'
    },
};

export const ItalicPartText: Story = {
    args: {
        variant: 'large',
        children: 'Hello _em_ World'
    },
};
