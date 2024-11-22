import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { USER } from '@tec/business';

import { OContext } from '@tec/ds';

import {LOGOUT_MENU, MENUS} from '../../utils';

import Sidebar from './Sidebar';

const meta = {
    args: {
        user: USER,
        menu: MENUS,
        logout: LOGOUT_MENU,
        showMobileMenu: false,
        handleToggleMenu: () => alert('Toggle Menu'),
    },
    title: 'Components/Sidebar',
    component: Sidebar,
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
    decorators: [(Story) => <div style={{ height: '50vh' }}><Story/></div>]
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {  }
};