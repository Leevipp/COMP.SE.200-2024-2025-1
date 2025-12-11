import eq from "../src/eq.js";

describe("tests for eq", () => {
    test("should return true for equal values", () => {
        expect(eq(1, 1)).toBeTruthy();
        expect(eq("test", "test")).toBeTruthy();
        expect(eq(true, true)).toBeTruthy();
    });

    test("should return false for non-equal values", () => {
        expect(eq(1, 2)).toBeFalsy();
        expect(eq("test", "testing")).toBeFalsy();
        expect(eq(true, false)).toBeFalsy();
    });

    test("should return true for same object references", () => {
        const obj = { a: 1 };
        expect(eq(obj, obj)).toBeTruthy();
    });

    test("should return false for two different object references", () => {
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };
        expect(eq(obj1, obj2)).toBeFalsy();
    });

    test("should return false for two different objects with the same content", () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 1 };
        expect(eq(obj1, obj2)).toBeFalsy();
    });

});