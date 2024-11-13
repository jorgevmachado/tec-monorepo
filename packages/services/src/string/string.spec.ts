import { formatUrl, uuid } from './string';

describe('String methods', () => {
    describe('formatUrl', () => {
        const url = 'http://localhost:3000';
        it('should return formatted url when recieved url, path and params', () => {
            expect(formatUrl(url, 'user', { name: 'your_name' })).toEqual('http://localhost:3000/user?name=your_name');
        });

        it('should return formatted url when do not recieved params', () => {
            expect(formatUrl(url, 'user')).toEqual('http://localhost:3000/user');
        });
    });

    describe('uuid', () => {
        it ('should return uuid', () => {
            expect(uuid(new Date('1990-01-01'))).toEqual('00c3793f-2900-4000-8000-000000000000');
        });
    });
});