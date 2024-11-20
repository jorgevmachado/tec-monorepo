import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Text from '../../elements/text';

import Accordion from './Accordion';
import {OContext} from "../../utils";

const meta = {
    args: {
        title: 'Accordion Title',
        isOpen: false,
        context: 'neutral',
        children: 'Hello World',
        disabled: false,
        iconFormat: 'small',
        isBorderless: false,
        childrenTitle: undefined
    },
    title: 'Components/Accordion',
    component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};

export const IsOpen: Story = {
    args: {
        isOpen: true
    }
};

export const IconFormatBig: Story = {
    args: {
        iconFormat: 'big'
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const WithBorderless: Story = {
    args: {
        isBorderless: true
    }
};

export const WithChildrenTitle: Story = {
    args: {
        isOpen: true,
        childrenTitle: (
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingRight: "4px",
                }}
            >
                <div style={{ width: "100%", display: "flex", gap: "12px" }}>
                    <Text>client name</Text>
                    {/*<LTagCard context={"primary"}>Tag</LTagCard>*/}
                </div>
                <Text>Date</Text>
            </div>
        ),
    }
};


export const Contexts: Story = {
    args: {},
    render: (args) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {
                OContext.map((context) => (
                    <Accordion {...args} key={context} context={context} title={context} children={`${args.children} - ${context}`} />
                ))
            }
        </div>
    )
};