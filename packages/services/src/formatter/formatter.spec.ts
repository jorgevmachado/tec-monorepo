import formatter from './formatter';

describe('Formatter methods', () => {
    describe('sanitize' ,() => {
        it('should return sanitized string when recieved string', () => {
            expect(formatter.sanitize('String')).toEqual('tring');
        });
        it('should return sanitized string when do not recieved string', () => {
            expect(formatter.sanitize('')).toEqual('');
        });
    });
    describe('maskPhone' ,() => {
        it('should return formatted phone when recieved phone', () => {
            expect(formatter.maskPhone('00000000000')).toEqual('(00) 00000-0000');
        });
        it('should return formatted phone when do not recieved phone', () => {
            expect(formatter.maskPhone('')).toEqual('');
        });
    });
    describe('maskCurrency' ,() => {
        it('should return formatted currency when recieved currency', () => {
            expect(formatter.maskCurrency(9.99)).toEqual('R$ 9,99');
        });
        it('should return formatted currency when do not recieved currency', () => {
            expect(formatter.maskCurrency()).toEqual('R$ 0');
        });
    });
    describe('removeCurrencyMask' ,() => {
        it('should return number when recieved currency', () => {
            expect(formatter.removeCurrencyMask('R$ 900')).toEqual(900);
        });
    });
    describe('maskCep' ,() => {
        it('should return formatted cep when recieved cep', () => {
            expect(formatter.maskCep('00000000')).toEqual('00000-000');
        });
        it('should return formatted cep when do not recieved cep', () => {
            expect(formatter.maskCep('')).toEqual('');
        });
    });
    describe('maskCpf' ,() => {
        it('should return formatted cpf when recieved cpf', () => {
            expect(formatter.maskCpf('00000000000')).toEqual('000.000.000-00');
        });
        it('should return formatted cpf when do not recieved cpf', () => {
            expect(formatter.maskCpf('')).toEqual('');
        });
    });
});