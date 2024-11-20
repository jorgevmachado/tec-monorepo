import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import {OAlert} from "./interface";

import Alert from './Alert';

const meta = {
    args: {
        type: 'info',
        children: 'Hello, World!',
    },
    title: 'Components/Alert',
    argTypes: {
        type: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'info' },
            },
            options: OAlert,
            control: { type: 'select' },
        },
        link: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '{ text: string; clickAction: () => void; }' },
            },
            control: { type: 'object' },
        },
        onClose: {
            table: {
                type: { summary: 'function' },
                defaultValue: { summary: 'undefined' },
            },
            option: 'onClose',
            description: 'onClose event'
        },
        hasCloseButton: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        }
    },
    component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};

export const Types: Story = {
    args: {},
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {OAlert.map((type) => (
                <Alert {...args} key={type} type={type}> {type} </Alert>
            ))}
        </div>
    )
};

export const TypesWithCloseButton: Story = {
    args: {
        hasCloseButton: true,
        onClose: () => alert('Closed!')
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {OAlert.map((type) => (
                <Alert {...args} key={type} type={type}> {type} </Alert>
            ))}
        </div>
    )
};

export const TypesWithLinkAndManyLines: Story = {
    args: {
        link: {
            text: 'Click me!',
            clickAction: () => alert('Clicked!')
        },
        onClose: () => alert('Closed!'),
        children: (
            <div>
                <p>this is a message.</p>
                <p>With many lines.</p>
                <p>With many lines.</p>
                <p>With many lines.</p>
                <p>With many lines.</p>
                <p>With many lines.</p>
                <p>With many lines.</p>
                <p>With many lines.</p>
            </div>
        ),
        hasCloseButton: true,
    },
    render: (args) => (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {OAlert.map((type) => (
                <Alert {...args} key={type} type={type}> {type} {args.children} </Alert>
            ))}
        </div>
    )
};