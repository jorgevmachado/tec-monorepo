import validator from './validator';

describe('Validator methods', () => {
    describe('isValidCep', () => {
        it('should return true when recieved valid cep', () => {
            expect(validator.isValidCep('12345-678')).toEqual(true);
        });

        it('should return true when recieved valid cep without mask', () => {
            expect(validator.isValidCep('12345678', false)).toEqual(true);
        });

        it('should return false when recieved invalid cep', () => {
            expect(validator.isValidCep('1234-678')).toEqual(false);
        });
    });
    describe('isValidPhone', () => {
        it('should return true when recieved valid phone', () => {
            expect(validator.isValidPhone('(11) 1234-5678')).toEqual(true);
        });

        it('should return true when recieved valid phone without mask', () => {
            expect(validator.isValidPhone('1112345678', false)).toEqual(true);
        });

        it('should return true when recieved invalid phone', () => {
            expect(validator.isValidPhone('(11) 11234-5678')).toEqual(false);
        });
    });

    describe('isValidMobile', () => {
        it('should return true when recieved valid phone mobile', () => {
            expect(validator.isValidMobile('(11) 12345-6789')).toEqual(true);
        });

        it('should return true when recieved valid phone mobile without mask', () => {
            expect(validator.isValidMobile('11123456789', false)).toEqual(true);
        });

        it('should return true when recieved invalid phone mobile', () => {
            expect(validator.isValidMobile('(11) 11234-56782')).toEqual(false);
        });
    });

    describe('isValidCpf', () => {
        it('should return true when recieved valid cpf', () => {
            expect(validator.isValidCpf('515.516.165-72')).toEqual(true);
        });

        it('should return true when recieved valid cpf without mask', () => {
            expect(validator.isValidCpf('51551616572', false)).toEqual(true);
        });

        it('should return true when recieved invalid cpf', () => {
            expect(validator.isValidCpf('515516165722')).toEqual(false);
        });
    });

    describe('isValidEmail', () => {
        it('should return true when recieved valid email', () => {
            expect(validator.isValidEmail('nome@mail.com')).toEqual(true);
        });

        it('should return true when recieved invalid email', () => {
            expect(validator.isValidEmail('nome.mail.com')).toEqual(false);
        });
    });

    describe('isValidNumber', () => {
        it('should return true when recieved valid number', () => {
            expect(validator.isValidNumber('7')).toEqual(true);
        });

        it('should return true when recieved invalid number', () => {
            expect(validator.isValidNumber('sete')).toEqual(false);
        });
    });

    describe('isValidPassword', () => {
        it('should return true when recieved valid password', () => {
            expect(validator.isValidPassword('123456')).toEqual(true);
        });

        it('should return true when recieved invalid password', () => {
            expect(validator.isValidPassword('123')).toEqual(false);
        });
    });

    describe('isValidPhoneMobile', () => {
        it('should return true when recieved valid phone or mobile', () => {
            expect(validator.isValidPhoneMobile('(11) 12345-6789')).toEqual(true);
        });

        it('should return true when recieved valid phone or mobile without mask', () => {
            expect(validator.isValidPhoneMobile('11123456789', false)).toEqual(true);
        });

        it('should return true when recieved invalid phone or mobile', () => {
            expect(validator.isValidPhoneMobile('(11) 12345-678948')).toEqual(false);
        });
    });

    describe('isEmpty', () => {
        it('should return true when recieved empty value', () => {
            expect(validator.isEmpty('')).toEqual(true);
        });

        it('should return true when recieved boolean value', () => {
            expect(validator.isEmpty(false)).toEqual(true);
        });

        it('should return false when recieved object value', () => {
            expect(validator.isEmpty({})).toEqual(false);
        });
    });
});