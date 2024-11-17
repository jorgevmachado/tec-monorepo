import type { Meta, StoryObj } from '@storybook/react';

import Image from './';

const src =
    'https://w7.pngwing.com/pngs/173/127/png-transparent-geek-logo-graphy-others-photography-artwork-sales-thumbnail.png';

const meta = {
    args: {
        fit: undefined,
        lazyLoad: false,
        fallback: false,
        fetchpriority: undefined,
    },
    title: 'Elements/Image',
    argTypes: {
        fit: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'cover' },
            },
            options: ['cover', 'contain'],
            control: { type: 'radio' },
        },
        lazyLoad: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        fallback: {
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' },
            },
        },
        fetchpriority: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'auto' },
            },
            options: ['high', 'low', 'auto'],
            control: { type: 'radio' },
        },
    },
    component: Image,
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        // @ts-ignore
        src: src,
    },
};

export const WithError: Story = {
    args: {
        // @ts-ignore
        alt: 'error',
        // @ts-ignore
        src: undefined,
    },
};

export const WithFallback: Story = {
    args: {
        // @ts-ignore
        alt: 'fallback',
        fallback: true,
        // @ts-ignore
        src: undefined,
    },
};