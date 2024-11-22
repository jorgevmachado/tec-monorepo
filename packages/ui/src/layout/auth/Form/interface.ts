import React from 'react';

import { User } from '@tec/business';

import type { OnAuthSubmit, TAuth } from '../interface';
import {TContext} from '@tec/ds/utils';

export type TInput = 
    | 'cpf'
    | 'name'
    | 'gender'
    | 'email'
    | 'whatsUp'
    | 'password' 
    | 'dateOfBirth' 
    | 'passwordConfirmation';

export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>{
    user?: User;
    type: TAuth;
    context: TContext;
    onSubmit: (onAuthSubmit: OnAuthSubmit) => void;
    buttonLabel?: string;
}