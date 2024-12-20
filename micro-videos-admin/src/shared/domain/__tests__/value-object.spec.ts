import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    }
}

class ComplexValueObject extends ValueObject {
    constructor(readonly value1: string, readonly value2: number) {
        super();
    }
}

describe('ValueObject Unit Tests', () => {
    test('should return true if two value objects are equal', () => {
        const valueObject1 = new StringValueObject('test');
        const valueObject2 = new StringValueObject('test');
        expect(valueObject1.equals(valueObject2)).toBeTruthy();

        const valueObject3 = new ComplexValueObject('test', 1);
        const valueObject4 = new ComplexValueObject('test', 1);
        expect(valueObject3.equals(valueObject4)).toBeTruthy();
    })

    test('should return false if two value objects are not equal', () => {
        const valueObject1 = new StringValueObject('test');
        const valueObject2 = new StringValueObject('test2');
        expect(valueObject1.equals(valueObject2)).toBeFalsy();
        expect(valueObject2.equals(null as any)).toBeFalsy();
        expect(valueObject2.equals(undefined as any)).toBeFalsy();

        const valueObject3 = new ComplexValueObject('test', 1);
        const valueObject4 = new ComplexValueObject('test', 2);
        expect(valueObject3.equals(valueObject4)).toBeFalsy();
        expect(valueObject4.equals(null as any)).toBeFalsy();
        expect(valueObject4.equals(undefined as any)).toBeFalsy();
    })
})