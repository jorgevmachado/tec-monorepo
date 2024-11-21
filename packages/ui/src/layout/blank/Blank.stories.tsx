import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import Blank from './Blank';

const meta = {
    tags: ['autodocs'],
    args: {
        children: (
            <>
                <h1>Blank Layout</h1>
                <p>Hello World</p>
            </>
        )
    },
    title: 'Layout/Blank',
    argTypes: {},
    component: Blank,
    parameters: {
        layout: 'centered',
    },
    
} satisfies Meta<typeof Blank>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};