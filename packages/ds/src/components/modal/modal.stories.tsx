import * as React from 'react';

import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Modal, { ModalProps } from './modal';

import Button from '../button';

const meta = {
    args: {
        title: 'title modal',
        isOpen: false,
        spacing: 'md',
        context: 'primary',
        onClose: undefined,
        children: 'body modal',
        closeOnEsc: true,
        closeOnOutsideClick: true,
        removeBackgroundScroll: false,
    },
    title: 'Components/Modal',
    component: Modal,
    decorators: [(Story) => <div style={{ height: '50vh' }}><Story/></div>]
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

const TemplateModal = (args: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} children={args.children}/>
        </>
    );
};

export const Default: Story = {
    args: { },
    render: (args) => <TemplateModal {...args} children={args.children}/>
};

export const WithScroll: Story = {
    args: {
        children: (
            <>
                { Array
                    .from({ length: 32 }, (_, index) => index + 1)
                    .map((item) => (<div key={item}>CARD {item}</div>))
                }
            </>
        ),
        removeBackgroundScroll: true,
    },
    render: (args) => <TemplateModal {...args} children={args.children}/>
};