import ceil from "../src/ceil.js";

describe("tests for ceil", () => {
    test("should round numbers up to the nearest integer when given the number as the only parameter", () => {
        expect(ceil(4.3)).toBe(5);
    });

    test("should round numbers up to the specified precision", () => {
        expect(ceil(4.233333333, 2)).toBe(4.24);
    });

    test("should handle negative precision correctly", () => {
        expect(ceil(4.233333333, -2)).toBe(100);
    });

    test("should return NaN when input is NaN", () => {
        expect(ceil(NaN)).toBeNaN();
    });

    test("if precision is NaN it should default to 0", () => {
        expect(ceil(4.233333333, NaN)).toBe(5);
    });

});