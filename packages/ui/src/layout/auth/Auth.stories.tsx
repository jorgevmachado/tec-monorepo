import * as React from 'react';
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { USER } from '@tec/business';

import { AuthProps, OnAuthSubmit } from './interface';

import Auth from './Auth';

const meta = {
    args: {
        user: USER,
        type: 'signIn',
        logo: {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHN5dygQnJFirBww40JLAsLuZHF0kOdBrzLw&s',
            width: undefined,
            height: undefined,
        },
        title: 'Sign in',
        onSubmit: () => {},
        signUpLink: {
            title: 'Don\'t have an account ?',
            label: 'Register here\n',
            clickAction: () => { alert('redirect to sign up'); },
        },
        signInLink: {
            title: 'Already have an account ?',
            label: 'Sign in here',
            clickAction: () => { alert('redirect to sign in'); },

        },
        description: 'By continuing, you affirm that you are over 18 years old and allow the sharing of your data in interactions with the platform.',
        buttonLabel: 'Sign in',
        withGoogleAuth: true,
        withFacebookAuth: true,
        forgotPasswordLink: {
            title: undefined,
            label: 'I forgot my password',
            clickAction: () => { alert('redirect to forgot password'); },
        }
    },
    title: 'Layout/Auth',
    component: Auth,
} satisfies Meta<typeof Auth>;

export default meta;

type Story = StoryObj<typeof meta>;

const renderAuth = (args: AuthProps) => {
    const [currentUser, setCurrentUser] = useState<OnAuthSubmit>();
    const onSubmit = (user: OnAuthSubmit) => {
        setCurrentUser(user);
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Auth {...args} onSubmit={onSubmit}/>
            <p>user: {JSON.stringify(currentUser)}</p>
        </div>
    );
};

export const Default: Story = {
    args: {
        user: undefined
    },
    render: renderAuth
};

export const SignUp: Story = {
    args: {
        type: 'signUp',
        title: 'sign Up',
        description: 'By continuing, you affirm that you are over 18 years old and allow the sharing of your data in interactions with the platform.',
        withGoogleAuth: true,
        withFacebookAuth: true,
        forgotPasswordLink: {
            title: undefined,
            label: 'I forgot my password',
            clickAction: () => { alert('redirect to forgot password'); },
        }
    },
    render: renderAuth
};

export const Update: Story  = {
    args: {
        type: 'update',
        logo: undefined,
        title: 'My personal data',
        buttonLabel: 'Save',
        description: undefined,
    },
    render: renderAuth
};

export const ForgotPassword: Story  = {
    args: {
        type: 'forgotPassword',
        title: 'Forgot my Password',
        buttonLabel: 'Save',
        description: undefined,
    },
    render: renderAuth
};
