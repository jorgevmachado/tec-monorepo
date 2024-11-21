import { User } from '@/auth/interface';

import { EGender, ERole, EStatus } from '@/api';

export const USER: User = {
    id: 'eaca4c08-e62d-495a-ae1c-918199da8d52',
    cpf: '49892120450',
    role: ERole.USER,
    name: 'John Doe',
    email: 'john.doe@mail.com',
    gender: EGender.MALE,
    status: EStatus.INCOMPLETE,
    whatsUp: '11998765432',
    picture: undefined,
    createdAt: new Date('2024-09-09'),
    deletedAt: undefined,
    updatedAt: undefined,
    dateOfBirth: new Date('1990-01-01'),
};