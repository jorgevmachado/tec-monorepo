import type { Meta, StoryObj } from '@storybook/react';

import PageContent from './PageContent';

const meta = {
    args: {
        children: 'Hello World',
    },
    title: 'Layout/PageContent',
    component: PageContent,
} satisfies Meta<typeof PageContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};

export const WithTitle: Story = {
    args: {
        title: 'Page Layout title',
    }
};