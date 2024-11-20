import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';
import {OContext, OIcon} from "../../utils";

const ODirection = ['left', 'right'];

const meta = {
    args: {
        icon: undefined,
        detail: undefined,
        context: 'neutral',
        iconSide: undefined,
        inclined: undefined,
        wideIcon: undefined,
        children: 'Hello, World!',
        fullWidth: undefined,
    },
    title: 'Components/Tag',
    argTypes: {
        icon: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'react' },
            },
            options: OIcon,
            control: { type: 'select' },
        },
        detail: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            options: ODirection,
            control: { type: 'select' },
        },
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: OContext,
            control: { type: 'select' },
        },
        iconSide: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            options: ODirection,
            control: { type: 'select' },
        },
        inclined: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            options: ODirection,
            control: { type: 'select' },
        },
        wideIcon: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'undefined' },
            },
            control: { type: 'boolean' },
        },
        fullWidth: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'undefined' },
            },
            control: { type: 'boolean' },
        },
    },
    component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {  }
};

export const Contexts: Story = {
    args: {},
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {
                OContext.map((context) => (
                    <Tag {...args} key={context} context={context}>
                        {context}
                    </Tag>
                ))
            }
        </div>
    )
};


export const WithIcon: Story = {
    args: {
        icon: 'react',
        context: 'info',
    }
};

export const WithDetail: Story = {
    args: {
        detail: 'left',
        context: 'error',
    }
};

export const WithInclination: Story = {
    args: {
        inclined: 'right',
        context: 'success',
    }
};