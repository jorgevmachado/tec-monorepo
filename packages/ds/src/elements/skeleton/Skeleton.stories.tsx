import type { Meta, StoryObj } from '@storybook/react';

import Skeleton, { ORadius } from './Skeleton';

const meta = {
    args: {
        width: '40',
        radius: 'none',
        height: '40',
        freeWidth: undefined,
        freeHeight: undefined,
    },
    title: 'Elements/Skeleton',
    argTypes: {
        width: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '40' },
            },
            control: { type: 'text' }
        },
        radius: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'none' },
            },
            options: ORadius,
            control: { type: 'select' }
        },
        height: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '40' },
            },
            control: { type: 'text' }
        },
        freeWidth: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            control: { type: 'text' }
        },
        freeHeight: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'undefined' },
            },
            control: { type: 'text' }
        },
    },
    component: Skeleton,
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};

export const BorderRadiusSmall: Story = {
    args: {
        radius: 'small',
    }
};

export const BorderRadiusRegular: Story = {
    args: {
        radius: 'regular',
    }
};

export const BorderRadiusLarge: Story = {
    args: {
        radius: 'large',
    }
};

export const BorderRadiusRounded: Story = {
    args: {
        width: '100',
        radius: 'rounded',
    }
};

export const BorderRadiusCircle: Story = {
    args: {
        radius: 'circle',
    }
};