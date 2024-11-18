import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { TContext } from "../../utils";

import Button, {TAppearance} from "../button";

import Dropdown from './';

const meta = {
    args: {
        type: 'button',
        label: 'activator',
        context: 'neutral',
        disabled: false,
        children: 'Hello, World!',
        appearance: 'standard',
    },
    title: 'Components/Dropdown',
    component: Dropdown,
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

const Buttons = ({ context = 'primary', appearance = 'standard' }: {context?: TContext, appearance?: TAppearance}) => {
    return (
        <>
            <Button
                context={context}
                appearance={appearance}>
                BUTTON 1
            </Button>
            <Button
                context={context}
                appearance={appearance}>
                BUTTON 2
            </Button>
            <Button
                context={context}
                appearance={appearance}>
                BUTTON 3
            </Button>
        </>
    );
};

export const Default: Story = {
    args: {},
    render: (args) => (
        <Dropdown {...args}>
            <Buttons/>
        </Dropdown>
    )
};

export const DropdownsButtons: Story = {
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dropdown {...args} context="primary" label="Primary"> <Buttons context="primary"/> </Dropdown>
            <Dropdown {...args} context="secondary" label="Secondary"> <Buttons context="secondary"/> </Dropdown>
            <Dropdown {...args} context="info" label="Info"> <Buttons context="info"/> </Dropdown>
            <Dropdown {...args} context="attention" label="Attention"> <Buttons context="attention"/> </Dropdown>
            <Dropdown {...args} context="error" label="Error"> <Buttons context="error"/> </Dropdown>
        </div>
    )
};

export const DropdownsLink: Story = {
    args: {
        type: 'link'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dropdown {...args} context="primary" label="Primary"> <Buttons context="primary"/> </Dropdown>
            <Dropdown {...args} context="secondary" label="Secondary"> <Buttons context="secondary"/> </Dropdown>
            <Dropdown {...args} context="info" label="Info"> <Buttons context="info"/> </Dropdown>
            <Dropdown {...args} context="attention" label="Attention"> <Buttons context="attention"/> </Dropdown>
            <Dropdown {...args} context="error" label="Error"> <Buttons context="error"/> </Dropdown>
        </div>
    )
};

export const NavbarButton: Story = {
    args: {
        appearance: 'navbar'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dropdown {...args} context="primary" label="Primary"> <Buttons context="primary"/> </Dropdown>
            <Dropdown {...args} context="secondary" label="Secondary"> <Buttons context="secondary"/> </Dropdown>
            <Dropdown {...args} context="info" label="Info"> <Buttons context="info"/> </Dropdown>
            <Dropdown {...args} context="attention" label="Attention"> <Buttons context="attention"/> </Dropdown>
            <Dropdown {...args} context="error" label="Error"> <Buttons context="error"/> </Dropdown>
        </div>
    )
};

export const NavbarLink: Story = {
    args: {
        type: 'link',
        appearance: 'navbar'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dropdown {...args} context="primary" label="Primary"> <Buttons context="primary"/> </Dropdown>
            <Dropdown {...args} context="secondary" label="Secondary"> <Buttons context="secondary"/> </Dropdown>
            <Dropdown {...args} context="info" label="Info"> <Buttons context="info"/> </Dropdown>
            <Dropdown {...args} context="attention" label="Attention"> <Buttons context="attention"/> </Dropdown>
            <Dropdown {...args} context="error" label="Error"> <Buttons context="error"/> </Dropdown>
        </div>
    )
};


export const SidebarButton: Story = {
    args: {
        appearance: 'sidebar'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dropdown {...args} context="primary" label="Primary"> <Buttons context="primary"/> </Dropdown>
            <Dropdown {...args} context="secondary" label="Secondary"> <Buttons context="secondary"/> </Dropdown>
            <Dropdown {...args} context="info" label="Info"> <Buttons context="info"/> </Dropdown>
            <Dropdown {...args} context="attention" label="Attention"> <Buttons context="attention"/> </Dropdown>
            <Dropdown {...args} context="error" label="Error"> <Buttons context="error"/> </Dropdown>
        </div>
    )
};

export const SidebarLink: Story = {
    args: {
        type: 'link',
        appearance: 'sidebar'
    },
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Dropdown {...args} context="primary" label="Primary"> <Buttons context="primary"/> </Dropdown>
            <Dropdown {...args} context="secondary" label="Secondary"> <Buttons context="secondary"/> </Dropdown>
            <Dropdown {...args} context="info" label="Info"> <Buttons context="info"/> </Dropdown>
            <Dropdown {...args} context="attention" label="Attention"> <Buttons context="attention"/> </Dropdown>
            <Dropdown {...args} context="error" label="Error"> <Buttons context="error"/> </Dropdown>
        </div>
    )
};