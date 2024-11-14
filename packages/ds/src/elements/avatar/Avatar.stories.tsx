import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OContext, OSimplySize, } from '../../utils';

import Avatar from './';

const src = 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1728950400&semt=ais_hybrid';


const meta = {
    args: {
        src,
        size: 'medium',
        name: 'Harry Potter Junior',
        context: 'neutral',
        initialsLength: 3,
        hasNotification: false,
    },
    title: 'Elements/Avatar',
    argTypes: {
        src: {
            type: { name: 'string' },
            table: {
                defaultValue: { summary: src },
            },
            control: { type: 'text' },
        },
        size: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'medium' }
            },
            options: OSimplySize,
            control: { type: 'select' },

        },
        name: {
            type: { name: 'string' },
            table: {
                defaultValue: { summary: 'Harry Potter Junior' },
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
        initialsLength: {
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '3' },
            },
            control: { type: 'number' },

        },
        hasNotification: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
    },
    component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};

export const WithoutImage: Story = {
    args: {
        src: undefined,
    }
};

export const WithoutNotification: Story = {
    args: {
        hasNotification: true
    }
};

export const Contexts: Story = {
    args: {
        src: undefined,
        size: 'large',
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OContext.map((context) => (
                <Avatar {...args} context={context} key={context} />
            ))}
        </div>
    )
};

export const Sizes: Story = {
    args: {
        src: undefined,
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OSimplySize.map((size) => (
                <Avatar {...args} size={size}  key={size} />
            ))}
        </div>
    )
};

