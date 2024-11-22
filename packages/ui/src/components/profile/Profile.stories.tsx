import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { USER } from '@tec/business';

import { OContext } from '@tec/ds';

import { PROFILE_MENU } from '../../utils';

import Profile from './Profile';

const meta = {
    args: {
        name: USER.name,
        email: USER.email,
        context: 'neutral',
        picture: USER.picture,
        children: 'Hello, World!',
        profileMenu: PROFILE_MENU
    },
    title: 'Components/Profile',
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
    component: Profile,
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {  }
};