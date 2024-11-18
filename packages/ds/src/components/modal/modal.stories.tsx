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
        backDropColor: 'neutral-100',
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
            {/*@ts-ignore*/}
            <Button onClick={() => setIsOpen(true)} context={args.context}>Abrir modal</Button>
            <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} children={args.children}/>
        </>
    );
};

export const Default: Story = {
    args: { },
    render: (args) => <TemplateModal {...args} children={args.children}/>
};


export const SecondaryWithBackDropColor: Story = {
    args: {
        context: 'secondary',
        backDropColor: 'secondary-100'
    },
    render: (args) => <TemplateModal {...args} children={args.children}/>
};

export const InfoWithBackDropColor: Story = {
    args: {
        context: 'info',
        backDropColor: 'info-100'
    },
    render: (args) => <TemplateModal {...args} children={args.children}/>
};

export const ErrorWithBackDropColor: Story = {
    args: {
        context: 'error',
        backDropColor: 'error-100'
    },
    render: (args) => <TemplateModal {...args} children={args.children}/>
};

export const SuccessWithBackDropColor: Story = {
    args: {
        context: 'success',
        backDropColor: 'success-100'
    },
    render: (args) => <TemplateModal {...args} children={args.children}/>
};

export const AttentionWithBackDropColor: Story = {
    args: {
        context: 'attention',
        backDropColor: 'attention-100'
    },
    render: (args) => <TemplateModal {...args} children={args.children}/>
};

export const Neutral: Story = {
    args: {
        context: 'neutral'
    },
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