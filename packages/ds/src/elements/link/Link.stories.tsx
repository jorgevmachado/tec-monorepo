import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OColors, OContext, OIcon, OIconPosition, OSimplySize, OWeight } from '../../utils';

import { OAppearance } from './interface';

import Link from './';

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
    title: 'Elements/Link',
    component: Link,
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
    }
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: 'Exemplo' }
};


export const Sizes: Story = {
    args: {
        context: 'primary'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OSimplySize.map((size) => (
                <Link {...args} key={size} size={size} > {size} </Link>
            )) }
        </div>
    )
};

export const Weight: Story = {
    args: {
        context: 'secondary'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OWeight.map((weight) => (
                <Link {...args} key={weight} weight={weight} > {weight} </Link>
            )) }
        </div>
    )
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

export const Menu: Story = {
    args: {
        appearance: 'menu',
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            { OContext.map((context) => (
                <Link {...args} key={context} context={context} > {context} </Link>
            )) }
        </div>
    )
};

export const WithIconLeft: Story = {
    args: {
        icon: 'react',
        context: 'primary',
        children: 'With Icon Left',
    }
};

export const WithIconRight: Story = {
    args: {
        icon: 'react',
        context: 'primary',
        children: 'With Icon Right',
        iconPosition: 'right'
    }
};

export const WithIconRightCustomColor: Story = {
    args: {
        icon: 'react',
        context: 'primary',
        children: 'With Icon Right',
        iconColor: 'error-80',
        iconPosition: 'right',
    }
};

export const WithNotificationCount: Story = {
    args: {
        context: 'primary',
        children: 'With Notification Count',
        notificationCounter: 9,
    }
};

export const WithNotificationCountCustomColors: Story = {
    args: {
        context: 'primary',
        children: 'With Notification Count',
        notificationCounter: 9,
        notificationColor: 'neutral-90',
        notificationBackgroundColor: 'neutral-70'
    }
};