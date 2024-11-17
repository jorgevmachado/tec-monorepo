import type { Meta, StoryObj } from '@storybook/react';

import Modal from './modal';

const meta = {
    args: {
        children: 'Hello, World!',
    },
    title: 'Components/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { children: 'Exemplo' }
};