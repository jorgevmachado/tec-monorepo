import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import RadioGroup, { RadioGroupProps } from './RadioGroup';
import { useState } from 'react';
import {OContext} from '../../utils';

const defaultExample = [
    { value: 'pessoa-fisica', label: 'Pessoa Física' },
    { value: 'pessoa-juridica', label: 'Pessoa Jurídica' },
];

const defaultRangeExample = Array.from(new Array(9), (_, i) => ({
    value: i + 1,
    label: i + 1,
}));

const defaultExampleMultiselect = [
    { value: 'fotos', label: 'Fotos' },
    { value: 'localizacao', label: 'Localização' },
    { value: 'outros', label: 'Outros Motivos' },
];

const meta = {
    args: {
        options: defaultExample,
        context: 'neutral',
        appearance: 'standard',
        modelValue: 'pessoa-fisica',
    },
    title: 'Components/RadioGroup',
    argTypes: {
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
            options: ['standard', 'range'],
            control: { type: 'select' },
        },
        modelValue: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'one' },
            },
            control: { type: 'text' }
        },
        dataTestId: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'radio-test' },
            },
            control: { type: 'text' }
        },
    },
    component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderTemplate = (args: RadioGroupProps) => {
    const [model, setModel] = useState<number | string | Array<string | number>>(
        args.modelValue as string | number | Array<string | number>
    );
    return (
        <div>
            <RadioGroup
                onActionClick={(value) => {
                    setModel(value);
                }}
                {...args}
                modelValue={model}
            />
            <br />
            {model && <p>Model value: {model}</p>}
        </div>
    );
};

export const Default: Story = {
    args: {
        modelValue: 'pessoa-fisica',
        options: defaultExample,
    },
    render: RenderTemplate
};


export const WithLabel: Story = {
    args: {
        label: 'Escolha uma opção',
        options: defaultExample,
    },
    render: RenderTemplate
};

export const WithRangeAppearance: Story = {
    args: {
        appearance: 'range',
        options: defaultRangeExample,
        modelValue: 1,
    },
    render: RenderTemplate
};

export const WithRequiredMessage: Story = {
    args: {
        modelValue: undefined,
        requiredMessage: 'Escolha uma opção',
        options: defaultExample,
    },
    render: RenderTemplate
};

export const WithRangeAndRequiredMessage: Story = {
    args: {
        appearance: 'range',
        context: 'primary',
        options: defaultRangeExample,
        modelValue: undefined,
        requiredMessage: 'Escolha uma opção',
    },
    render: RenderTemplate
};

export const WithMultiselect: Story = {
    args: {
        label: 'Escolha varias opções',
        options: defaultExampleMultiselect,
        multiSelect: true,
        modelValue: ['localizacao'],
    },
    render: RenderTemplate
};