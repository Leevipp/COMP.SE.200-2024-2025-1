import isEmpty from "../src/isEmpty.js";

describe("tests for isEmpty", () => {
    test("should return true for null values", () => {
        expect(isEmpty(null)).toBeTruthy();
    });

    test("should return true for empty array", () => {
        expect(isEmpty([])).toBeTruthy();
    });

    test("should return true for empty map", () => {
        expect(isEmpty(new Map())).toBeTruthy();
    });

    test("should return true for empty set", () => {
        expect(isEmpty(new Set())).toBeTruthy();
    });

    test("should return true for empty object", () => {
        expect(isEmpty({})).toBeTruthy();
    });

    test("should return true for boolean values", () => {
        expect(isEmpty(true)).toBeTruthy();
        expect(isEmpty(false)).toBeTruthy();
    });

    test("should return true for undefined", () => {
        expect(isEmpty(undefined)).toBeTruthy();
    });

    test("should return false for object with values", () => {
       expect(isEmpty({"a" : 1, "b" : 2})).toBeFalsy();
    });

    test("should return false for array with values", () => {
        expect(isEmpty([1, 2, 3])).toBeFalsy();
    });
});