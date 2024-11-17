import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OColors, OContext, OIcon, OIconPosition, OSimplySize, OWeight } from '../../utils';

import { OAppearance } from './interface';

import Link from './index';

const meta = {
    args: {
        icon: undefined,
        size: 'medium',
        weight: 'normal',
        context: 'neutral',
        children: 'Hello, World!',
        iconColor: undefined,
        appearance: 'standard',
        iconPosition: 'left',
        iconClassName: undefined,
        notificationColor: undefined,
        notificationCounter: undefined,
        notificationClassName: undefined,
        notificationBackgroundColor: undefined,
    },
    title: 'Components/Link',
    argTypes: {
        icon: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'react' },
            },
            options: OIcon,
            control: { type: 'select' },
        },
        size: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'regular' },
            },
            options: OSimplySize,
            control: { type: 'radio' }
        },
        weight: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'regular' },
            },
            options: OWeight,
            control: { type: 'radio' }
        },
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: OContext,
            control: { type: 'select' },
        },
        iconColor: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary-100' },
            },
            options: OColors,
            control: { type: 'select' },
        },
        appearance: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'standard' },
            },
            options: OAppearance,
            control: { type: 'select' },
        },
        iconPosition: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'left' },
            },
            options: OIconPosition,
            control: { type: 'radio' }
        },
        iconClassName: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
        notificationColor: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'white' },
            },
            options: OColors,
            control: { type: 'select' },
        },
        notificationCounter: {
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '0' },
            },
            control: { type: 'number' },
        },
        notificationBackgroundColor: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary-100' },
            },
            options: OColors,
            control: { type: 'select' },
        },
    },
    component: Link,
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: 'Exemplo' }
};

export const Contexts: Story = {
    args: {},
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OContext.map((context) => (
                <Link {...args} key={context} context={context} > {context} </Link>
            )) }
        </div>
    )
};

export const Appearance: Story = {
    args: {
        context: 'primary'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OAppearance.map((appearance) => (
                <Link {...args} key={appearance} appearance={appearance} > {appearance} </Link>
            )) }
        </div>
    )
};

export const AppearanceWithIconLeft: Story = {
    args: {
        icon: 'react',
        context: 'secondary',
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OAppearance.map((appearance) => (
                <Link {...args} key={appearance} appearance={appearance} > {appearance} </Link>
            )) }
        </div>
    )
};

export const AppearanceWithIconRight: Story = {
    args: {
        icon: 'react',
        context: 'info',
        iconPosition: 'right'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OAppearance.map((appearance) => (
                <Link {...args} key={appearance} appearance={appearance} > {appearance} </Link>
            )) }
        </div>
    )
};

export const AppearanceWithIconRightCustomColor: Story = {
    args: {
        icon: 'react',
        context: 'success',
        iconColor: OColors.find((color) => color === 'error-80'),
        iconPosition: 'right'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OAppearance.map((appearance) => (
                <Link {...args} key={appearance} appearance={appearance} > {appearance} </Link>
            )) }
        </div>
    )
};


export const AppearanceWithNotification: Story = {
    args: {
        context: 'attention',
        notificationCounter: 9,
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OAppearance.map((appearance) => (
                <Link {...args} key={appearance} appearance={appearance} > {appearance} </Link>
            )) }
        </div>
    )
};

export const AppearanceWithNotificationCustom: Story = {
    args: {
        context: 'error',
        notificationCounter: 29,
        notificationColor: OColors.find((color) => color === 'neutral-90'),
        notificationBackgroundColor: OColors.find((color) => color === 'neutral-70'),
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OAppearance.map((appearance) => (
                <Link {...args} key={appearance} appearance={appearance} > {appearance} </Link>
            )) }
        </div>
    )
};