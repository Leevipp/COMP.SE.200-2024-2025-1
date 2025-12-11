import defaultTo from '../src/defaultTo.js';

describe("tests for defaultTo", () => {
    test ("should return the given value when it is not null or undefined", () => {
        const value = 1;
        const defaultValue = 10;
        const result = defaultTo(value, defaultValue);
        expect(result).toBe(1);
    });

    test("should return the default value when the given value is null", () => {
        const value = null;
        const defaultValue = 10;
        const result = defaultTo(value, defaultValue);
        expect(result).toBe(10);
    });

    test("should return the default value when the given value is undefined", () => {
        const value = undefined;
        const defaultValue = 10;
        const result = defaultTo(value, defaultValue);
        expect(result).toBe(10);
    });

    test("should return the NaN when the given value is NaN", () => {
        const value = NaN;
        const defaultValue = 10;
        const result = defaultTo(value, defaultValue);
        expect(result).toBeNaN();
    });

});