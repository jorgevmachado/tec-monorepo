import * as React from 'react';
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { OContext } from '../../utils/';

import Checkbox from './Checkbox';

const meta = {
    args: {
        id: 'foo',
        value: 'one',
        large: false,
        context: 'neutral',
        disabled: false,
        children: 'Hello World',
        modelValue: true,
    },
    title: 'Components/Checkbox',
    argTypes: {
        id: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
        value: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '' },
            },
            control: { type: 'text' },
        },
        large: {
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
        modelValue: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
            control: { type: 'boolean' },
        },
    },
    component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};

export const Large: Story = {
    args: {
        id: 'large',
        large: true
    }
};

export const Disabled: Story = {
    args: {
        id: 'disabled',
        disabled: true,
        modelValue: false,
    }
};

export const Contexts: Story = {
    args: {},
    render: (args) => (
        <div>
            { OContext
                .filter((item) => item !== 'error' && item !== 'attention')
                .map((context) => (
                    <Checkbox {...args} key={context} id={context} context={context} children={context}/>
                ))
            }
        </div>
    )
};

export const WithMultipleItems: Story = {
    args: {
        context: 'primary',
    },
    render: (args) => {
        const [model, setModel] = useState<Array<string | number> | boolean>([]);
        return (
            <div>
                <p>modelValue: {JSON.stringify(model)}</p>
                <Checkbox
                    {...args}
                    modelValue={model}
                    value="one"
                    onCheckboxChange={({ newChecked }) => setModel(newChecked)}>
                    Label 1
                </Checkbox>
                <Checkbox
                    {...args}
                    modelValue={model}
                    value="two"
                    onCheckboxChange={({ newChecked }) => setModel(newChecked)}>
                    Label 2
                </Checkbox>
                <Checkbox
                    {...args}
                    modelValue={model}
                    value="three"
                    onCheckboxChange={({ newChecked }) => setModel(newChecked)}>
                    Label 3
                </Checkbox>
                <Checkbox
                    {...args}
                    modelValue={model}
                    value="four"
                    onCheckboxChange={({ newChecked }) => setModel(newChecked)}>
                    Label 4
                </Checkbox>
            </div>
        );
    }
};