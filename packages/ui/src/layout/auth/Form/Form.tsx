import React, { useEffect, useState } from 'react';

import { formatter, validator } from '@tec/services';

import { EGender, ERole } from '@tec/business/api';

import { joinClass } from '@tec/ds/utils';

import { Button, Input, Radio } from '@tec/ds/components';
import { Text } from '@tec/ds/elements';

import { TAuth } from '../interface';

import { FormProps, TInput } from './interface';

import './Form.scss';

export default function Form({
    user,
    type,
    onSubmit,
    buttonLabel,
    ...props
}: FormProps) {

    const [cpf, setCpf] = useState<string>(user?.cpf ?? '');
    const [onBlurCpf, setOnBlurCpf] = useState<boolean>(false);
    const [invalidCpf, setInvalidCpf] = useState<boolean>(false);

    const [name, setName] = useState<string>(user?.name ?? '');
    const [onBlurName, setOnBlurName] = useState<boolean>(false);
    const [invalidName, setInvalidName] = useState<boolean>(false);

    const [email, setEmail] = useState<string>(user?.email ?? '');
    const [onBlurEmail, setOnBlurEmail] = useState<boolean>(false);
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);

    const [gender, setGender] = useState<string>(user?.gender ?? '');
    const [onBlurGender, setOnBlurGender] = useState<boolean>(false);
    const [invalidGender, setInvalidGender] = useState<boolean>(false);

    const [whatsUp, setWhatsUp] = useState<string>(user?.whatsUp ?? '');
    const [onBlurWhatsUp, setOnBlurWhatsUp] = useState<boolean>(false);
    const [invalidWhatsUp, setInvalidWhatsUp] = useState<boolean>(false);

    const [password, setPassword] = useState<string>('');
    const [onBlurPassword, setOnBlurPassword] = useState<boolean>(false);
    const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

    const [dateOfBirth, setDateOfBirth] = useState<string>(user?.dateOfBirth?.toString() ?? '' );
    const [onBlurDateOfBirth, setOnBlurDateOfBirth] = useState<boolean>(false);
    const [invalidDateOfBirth, setInvalidDateOfBirth] = useState<boolean>(false);

    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
    const [onBlurPasswordConfirmation, setOnBlurPasswordConfirmation] = useState<boolean>(false);
    const [invalidPasswordConfirmation, setInvalidPasswordConfirmation] = useState<boolean>(false);

    const validateInput = (blur: boolean,  value: string, type: TInput) => {
        if (blur) {
            switch (type) {
                case 'cpf': {
                    const valid = validator.isValidCpf(value);
                    setInvalidCpf(!valid);
                    break;
                }
                case 'email': {
                    const valid = validator.isValidEmail(value);
                    setInvalidEmail(!valid);
                    break;
                }
                case 'gender': {
                    const valid = value === 'MALE' || value === 'FEMALE';
                    setInvalidGender(!valid);
                    break;
                }
                case 'whatsUp': {
                    const valid = validator.isValidMobile(value);
                    setInvalidWhatsUp(!valid);
                    break;
                }
                case 'password': {
                    const valid = validator.isValidPassword(value);
                    setInvalidPassword(!valid);
                    break;
                }
                case 'dateOfBirth': {
                    setInvalidDateOfBirth(false);
                    break;
                }
                case 'passwordConfirmation': {
                    const valid = validator.isValidPassword(value);
                    setInvalidPasswordConfirmation(!valid);
                    break;
                }
                case 'name':
                default: {
                    setInvalidName(false);
                    break;
                }
            }
        }
    };

    const validateAll = (type: TAuth ) => {
        setInvalidCpf(false);
        setInvalidName(false);
        setInvalidEmail(false);
        setInvalidGender(false);
        setInvalidWhatsUp(false);
        setInvalidPassword(false);
        setInvalidDateOfBirth(false);
        setInvalidPasswordConfirmation(false);
        
        validateInput(true, email, 'email');

        if (type ==='signIn' || type ==='signUp') {
            validateInput(true, password, 'password');
        }

        if (type === 'signUp') {
            validateInput(true, passwordConfirmation, 'passwordConfirmation');
        }

        if (type === 'signUp' || type === 'update') {
            validateInput(true, cpf, 'cpf');
            validateInput(true, name, 'name');
            validateInput(true, email, 'email');
            validateInput(true, gender, 'gender');
            validateInput(true, whatsUp, 'whatsUp');
            validateInput(true, dateOfBirth, 'dateOfBirth');
        }
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        validateAll(type);

        // TODO REMEMBER TO REMOVE
        console.log('# => invalidGender => ', invalidGender);

        const valid =
            !invalidCpf &&
            !invalidName &&
            !invalidEmail &&
            !invalidGender &&
            !invalidPassword &&
            !invalidDateOfBirth &&
            !invalidPasswordConfirmation;
        
        if (valid) {
            const currentGender = gender as EGender;
            const currentDateOfBirth = new Date(dateOfBirth);
            onSubmit({
                id: user?.id ?? '',
                cpf,
                role: user?.role ?? ERole.USER,
                name,
                email,
                gender: currentGender ?? EGender.MALE,
                whatsUp,
                password,
                dateOfBirth: currentDateOfBirth,
                passwordConfirmation
            });
        }
    };


    useEffect(() => {
        validateInput(onBlurCpf, cpf, 'cpf');
    }, [cpf, onBlurCpf]);

    useEffect(() => {
        validateInput(onBlurName, name, 'name');
    }, [name, onBlurName]);

    useEffect(() => {
        validateInput(onBlurEmail, email, 'email');
    }, [email, onBlurEmail]);

    useEffect(() => {
        validateInput(onBlurGender, gender, 'gender');
    }, [gender, onBlurGender]);

    useEffect(() => {
        validateInput(onBlurWhatsUp, whatsUp, 'whatsUp');
    }, [whatsUp, onBlurWhatsUp]);

    useEffect(() => {
        validateInput(onBlurPassword, password, 'password');
    }, [password, onBlurPassword]);

    useEffect(() => {
        validateInput(onBlurDateOfBirth, dateOfBirth, 'dateOfBirth');
    }, [dateOfBirth, onBlurDateOfBirth]);

    useEffect(() => {
        validateInput(onBlurPasswordConfirmation, passwordConfirmation, 'passwordConfirmation');
    }, [passwordConfirmation, onBlurPasswordConfirmation]);
    
    const classNameList = joinClass([
        'form'
    ]);
    return (
        <form {...props} className={classNameList} onSubmit={handleSubmit}>
            { type !== 'forgotPassword' && (
                <div className="form__email">
                    <Input
                        type="email"
                        value={email}
                        label="E-mail"
                        onBlur={() => setOnBlurEmail(true)}
                        variant="regular"
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        isInvalid={invalidEmail}
                        iconContext="primary"
                        placeholder={`Enter your ${type === 'signUp' ? 'best' : ''} e-mail`}
                        invalidMessage="The field must be a valid email"
                    />
                </div>
            )}

            {(type !== 'signIn' && type !== 'forgotPassword') && (
                <>
                    <div className="form__cpf">
                        <Input
                            type="text"
                            value={formatter.maskCpf(cpf)}
                            label="CPF"
                            onBlur={() => setOnBlurCpf(true)}
                            variant="regular"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)}
                            isInvalid={invalidCpf}
                            iconContext="primary"
                            placeholder="Enter your CPF"
                            invalidMessage="The field must be a valid CPF"
                        />
                    </div>
                    <div className="form__name">
                        <Input
                            type="text"
                            value={name}
                            label="Name"
                            onBlur={() => setOnBlurName(true)}
                            variant="regular"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            isInvalid={invalidName}
                            iconContext="primary"
                            placeholder="Enter your Fullname"
                            invalidMessage="The field must be a valid Name"
                        />
                    </div>
                    <div className="form__whats-up">
                        <Input
                            type="text"
                            value={formatter.maskPhone(whatsUp)}
                            label="WhatsUp"
                            onBlur={() => setOnBlurWhatsUp(true)}
                            variant="regular"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setWhatsUp(e.target.value)}
                            isInvalid={invalidWhatsUp}
                            iconContext="primary"
                            placeholder="Enter your WhatsUp"
                            invalidMessage="The field must be a valid WhatsUp"
                        />
                    </div>
                    <div className="form__gender">
                        <Text variant="large">Gender</Text>
                        <Radio
                            value="MALE"
                            context="primary"
                            modelValue={gender}
                            onItemClick={(value) => {
                                setGender(value as EGender);
                                setOnBlurGender(true);
                            }}>
                            Masculino
                        </Radio>
                        <Radio
                            value="FEMALE"
                            context="primary"
                            modelValue={gender}
                            onItemClick={(value) => {
                                setGender(value as EGender);
                                setOnBlurGender(true);
                            }}>
                            Feminino
                        </Radio>
                    </div>
                    <div className="form__date-of-birth">
                        <Input
                            type="text"
                            value={dateOfBirth}
                            label="Date of birth"
                            onBlur={() => setOnBlurDateOfBirth(true)}
                            variant="regular"
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setDateOfBirth(e.target.value)}
                            isInvalid={invalidDateOfBirth}
                            iconContext="primary"
                            placeholder="Enter your date of birth"
                            invalidMessage="The field must be a valid date"
                        />
                    </div>
                </>
            )}
            { type !== 'update' && (
                <div className="form__password">
                    <Input
                        type="password"
                        value={password}
                        label="Password"
                        onBlur={() => setOnBlurPassword(true)}
                        variant="regular"
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        isInvalid={invalidPassword}
                        iconContext="primary"
                        placeholder={`Enter your ${type === 'signUp' ? 'best' : ''} Password`}
                        invalidMessage="The field must be a valid password"
                    />
                </div>
            )}
            { (type === 'signUp' || type === 'forgotPassword') && (
                <div className="form__password-confirmation">
                    <Input
                        type="password"
                        value={passwordConfirmation}
                        label="Password confirmation"
                        onBlur={() => setOnBlurPasswordConfirmation(true)}
                        variant="regular"
                        onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordConfirmation(e.target.value)}
                        isInvalid={invalidPasswordConfirmation}
                        iconContext="primary"
                        placeholder="Confirm your password"
                        invalidMessage="The field must be a valid password"
                    />
                </div>
            )}

            <div className="form__button">
                <Button type="submit" fluid context="primary">{buttonLabel}</Button>
            </div>
        </form>
    );
}