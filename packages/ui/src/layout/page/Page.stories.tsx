import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { USER } from '@tec/business';

import { OContext } from '@tec/ds';

import { LOGOUT_MENU, MENUS } from '../../utils';

import Page from './Page';
import PageContent from '../pageContent';

const meta = {
    args: {
        user: USER,
        logo: {
            src: 'https://via.placeholder.com/150',
            alt: 'logo',
            title: 'logo',
            width: 80,
            height: 80,
            // @ts-ignore
            onClick: () => alert('Open Home')
        },
        menu: MENUS,
        logout: LOGOUT_MENU,
        context: 'neutral',
        children: (<PageContent title="Hello World!" children="PAGE"/> ),
    },
    title: 'Layout/Page',
    argTypes: {
        context: {
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: 'primary' },
            },
            options: OContext,
            control: { type: 'select' },
        },
    },
    component: Page,
    decorators: [(Story) => <div style={{ height: '50vh' }}><Story/></div>]
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { }
};