import type { Meta, StoryObj } from '@storybook/react';

import StepBar from './StepBar';

import type { Step } from './interface';

const items: Array<Step> = [
    {
        title: 'Title 1',
        label: 'label 1',
    },
    {
        title: 'Title 2',
        label: 'label 2',
    },
    {
        title: 'Title 3',
        label: 'label 3',
    },
    {
        title: 'Title 4',
        label: 'label 4',
    },
];

const meta = {
    args: {
        items,
        minimal:undefined,
        context: 'neutral',
        vertical: undefined,
        totalSteps: undefined,
        dataTestId: undefined,
        currentStep: 2,
        minimalLabel: undefined
    },
    title: 'Components/StepBar',
    component: StepBar,
} satisfies Meta<typeof StepBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};

export const WithoutLabel: Story = {
    args: {
        items: undefined,
        context: 'info',
        totalSteps: 6,
    }
};

export const Vertical: Story = {
    args: {
        context: 'primary',
        vertical: true,
    }
};

export const VerticalNoLabel: Story = {
    args: {
        items: undefined,
        context: 'secondary',
        vertical: true,
        totalSteps: 4,
    }
};

export const Minimal: Story = {
    args: {
        minimal: true,
        context: 'success',
        totalSteps: 4,
    }
};


export const MinimalWithLabel: Story = {
    args: {
        minimal: true,
        totalSteps: 4,
        minimalLabel: 'label',
    }
};


export const MinimalWithLabelVertical: Story = {
    args: {
        minimal: true,
        context: 'info',
        vertical: true,
        totalSteps: 4,
        minimalLabel: 'label',
    }
};