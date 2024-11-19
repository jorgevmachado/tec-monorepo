import { isObject, serialize } from './object';

describe('Object methods', () => {
    const customObject = { userId: 1, fullName: 'Text' };
    describe('serialize', () => {
        it('should return serialized string when recieved only one value', () => {
            const data = { name: 'your_name' };
            expect(serialize(data)).toEqual('name=your_name');
        });

        it('should return serialized string when recieved multiples values', () => {
            const data = { name: 'your_name', lastname: 'your_lastname' };
            expect(serialize(data)).toEqual('name=your_name&lastname=your_lastname');
        });

        it('should return undefined when recieved empty object', () => {
            const data = {};
            expect(serialize(data)).toEqual(undefined);
        });
    });
    describe('isObject', () => {
        it('should return true when param is a object', () => {
            expect(isObject(customObject)).toBeTruthy();
        });

        it('should return false when param is not a valid object', () => {
            expect(isObject('not-object')).toBeFalsy();
        });

    });
});