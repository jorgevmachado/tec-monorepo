import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OContext } from '../../utils';

import Spinner from './';

const meta = {
    args: {
        size: 32,
        context: 'primary'
    },
    title: 'Elements/Spinner',
    argTypes: {
        size: {
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: '32' },
            },
            control: { type: 'range', min: 16, max: 300 }
        },
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: OContext,
            control: { type: 'select' },
        },
    },
    component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { },
};

export const Contexts: Story = {
    args: { },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {OContext.map((context) => (
                <Spinner {...args} key={context} context={context}/>
            ))}
        </div>
    )
};