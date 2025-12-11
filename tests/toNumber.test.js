import toNumber from "../src/toNumber.js";

describe("tests for toNumber", () => {
    test("should convert string numbers to actual numbers", () => {
        expect(toNumber("12")).toBe(12);
    });

    test("given a number, should return the same number", () => {
        expect(toNumber(12)).toBe(12);
    });

    test("given a float, should return a number", () => {
        expect(toNumber(12.34)).toBe(12.34);
    });

    test("should return 0, when given a null value", () => {
        expect(toNumber(null)).toBe(0);
    });

});