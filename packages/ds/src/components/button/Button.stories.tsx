import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OColors, OContext, OIcon, OIconPosition, OSimplySize, OWeight } from '../../utils';

import { OAppearance } from './interface';

import Button from './index';

const meta = {
    args: {
        icon: undefined,
        size: 'medium',
        fluid: false,
        focus: false,
        weight: 'normal',
        rounded: false,
        context: 'neutral',
        children: 'Hello, World!',
        disabled: false,
        appearance: 'standard',
        iconPosition: 'left',
        iconClassName: undefined,
        notificationColor: undefined,
        notificationCounter: undefined,
        notificationClassName: undefined,
        notificationBackgroundColor: undefined
    },
    title: 'Components/Button',
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
                defaultValue: { summary: 'medium' },
            },
            options: OSimplySize,
            control: { type: 'radio' }
        },
        fluid: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        focus: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        weight: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'regular' },
            },
            options: OWeight,
            control: { type: 'radio' }
        },
        rounded: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: OContext,
            control: { type: 'select' },
        },
        disabled: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
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
    component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: 'Exemplo' }
};

export const Fluid: Story = {
    args: {
        fluid: true,
    },
    render: (args) => (
        <>
            { OContext.map((context) => (
                <div style={{marginBottom: '1rem'}}>
                    <Button {...args} key={context} context={context}> {context} with fluid </Button>
                    <br/>
                </div>
            ))}
        </>
    )
};

export const Rounded: Story = {
    args: {
        rounded: true,
    },
    render: (args) => (
        <>
            { OContext.map((context) => (
                <div style={{marginBottom: '1rem'}}>
                    <Button {...args} key={context} context={context}> {context} with rounded</Button>
                    <br/>
                </div>
            ))}
        </>
    )
};

export const Contexts: Story = {
    args: {},
    render: (args) => (
        <>
            { OContext.map((context) => (
                <div style={{marginBottom: '1rem'}}>
                    <Button {...args} key={context} context={context}> {context} </Button>
                    <br/>
                </div>
            ))}
        </>
    )
};

export const Disabled: Story = {
    args: {
        disabled: true
    },
    render: (args) => (
        <>
            { OContext.map((context) => (
                <div style={{marginBottom: '1rem'}}>
                    <Button {...args} key={context} context={context}> {context} with disabled </Button>
                    <br/>
                </div>
            ))}
        </>
    )
};

export const Appearance: Story = {
    args: {
        context: 'primary'
    },
    render: (args) => (
        <>
            { OAppearance.map((appearance) => (
                <div style={{marginBottom: '1rem'}}>
                    <Button {...args} key={appearance} appearance={appearance}> {appearance} </Button>
                    <br/>
                </div>
            ))}
        </>
    )
};

export const AppearanceWithIconLeft: Story = {
    args: {
        icon: 'react',
        context: 'secondary',
    },
    render: (args) => (
        <>
            { OAppearance.map((appearance) => (
                <div style={{marginBottom: '1rem'}}>
                    <Button {...args} key={appearance} appearance={appearance}> {appearance} </Button>
                    <br/>
                </div>
            ))}
        </>
    )
};

export const AppearanceWithIconRight: Story = {
    args: {
        icon: 'react',
        context: 'info',
        iconPosition: 'right',
    },
    render: (args) => (
        <>
            { OAppearance.map((appearance) => (
                <div style={{marginBottom: '1rem'}}>
                    <Button {...args} key={appearance} appearance={appearance}> {appearance} </Button>
                    <br/>
                </div>
            ))}
        </>
    )
};

export const AppearanceWithNotification: Story = {
    args: {
        context: 'success',
        notificationCounter: 5,
    },
    render: (args) => (
        <>
            { OAppearance.map((appearance) => (
                <div style={{marginBottom: '1rem'}}>
                    <Button {...args} key={appearance} appearance={appearance}> {appearance} </Button>
                    <br/>
                </div>
            ))}
        </>
    )
};

export const AppearanceWithNotificationCustomColors: Story = {
    args: {
        context: 'success',
        notificationColor: OColors.find((color) => color === 'white'),
        notificationCounter: 5,
        notificationBackgroundColor: OColors.find((color) => color === 'error-70'),
    },
    render: (args) => (
        <>
            { OAppearance.map((appearance) => (
                <div style={{marginBottom: '1rem'}}>
                    <Button {...args} key={appearance} appearance={appearance}> {appearance} </Button>
                    <br/>
                </div>
            ))}
        </>
    )
};