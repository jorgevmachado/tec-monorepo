import type { Meta, StoryObj } from '@storybook/react';

import Collapse from './Collapse';

const text = 'Atirei o pau no gatis, per gatis num morreus. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Atirei o pau no gatis, per gatis num morreus. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.';

const meta = {
    args: {
        hasIcon: false,
        context: 'neutral',
        children: text,
        openedText: undefined,
        closedText: undefined,
        actionComponent: undefined,
        showActionComponent: true,

    },
    title: 'Components/Collapse',
    component: Collapse,
} satisfies Meta<typeof Collapse>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};

export const WithoutActionComponent: Story = {
    args: {
        showActionComponent: false,
    }
};

export const WithCustomTexts: Story = {
    args: {
        context: 'primary',
        openedText: "Close",
        closedText: "Open",
    }
};

export const WithIcon: Story = {
    args: {
        context: 'secondary',
        hasIcon: true,
    }
};

export const WithButton: Story = {
    args: {
        context: 'info',
        actionComponent: 'button' as 'button' | 'link',
    }
};