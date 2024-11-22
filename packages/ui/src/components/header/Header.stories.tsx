import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { NAVBAR } from '../../utils';

import { OContext } from '@tec/ds';

import Header from './Header';

const meta = {
    args: {
        logo: {
            src: 'https://via.placeholder.com/150',
            alt: 'logo',
            title: 'logo',
            width: 80,
            height: 80,
            // @ts-ignore
            onClick: () => alert('Open Home')
        },
        navbar: NAVBAR.items,
        context: 'neutral',
        handleToggleMenu: () => alert('handle toggle menu')
    },
    title: 'Components/Header',
    component: Header,
    argTypes: {
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: OContext,
            control: { type: 'select' },
        },
    },
    decorators: [(Story) => <div style={{ height: '50vh' }}><Story/></div>]
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};