import { InvalidUuidError, Uuid } from "../uuid.vo";
import { v4 as uuidv4, validate } from 'uuid';


describe('UUID Value Object Unit Tests', () => {
    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

    test('should throw an error if the ID is not a valid UUID', () => {
        expect(() => {
            new Uuid('invalid-uuid');
        }).toThrow(new InvalidUuidError());

        expect(validateSpy).toHaveBeenCalledTimes(1);
    })

    test('should create a new UUID if the ID is not provided', () => {
        const uuid = new Uuid('');
        expect(uuid.id).toBeTruthy();

        const isValid = validate(uuid.id);
        expect(isValid).toBeTruthy();

        expect(validateSpy).toHaveBeenCalledTimes(1);

    })

    test('should accept a valid UUID', () => {
        const uuid = uuidv4();
        const isValid = new Uuid(uuid);
        expect(isValid.id).toBe(uuid);

        expect(validateSpy).toHaveBeenCalledTimes(1);

    });
})