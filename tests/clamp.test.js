import clamp from "../src/clamp.js";

// clamp function logic is swapped?

describe("tests for clamp", () => {
    test.failing("return the clamped value correctly", () => {
        expect(clamp(-10, -5, 5)).toBe(-5);
        expect(clamp(10, -5, 5)).toBe(5);
    });

    test.failing("returns correct number when large numbers are used", () => {
        expect(clamp(1e10, -1e5, 1e5)).toBe(1e5);
        expect(clamp(-1e10, -1e5, 1e5)).toBe(-1e5);
    });

    test("returns correct value when bounds are swapped", () => {
        expect(clamp(-2, 5, -5)).toBe(-2);
        expect(clamp(2, 5, -5)).toBe(2);
    })

    test.failing("return the number itself when within bounds", () => {
        expect(clamp(0, -5, 5)).toBe(0);
        expect(clamp(3, -5, 5)).toBe(3);
        expect(clamp(-3, -5, 5)).toBe(-3);
    });

    test.failing("test NaN values", () => {
        expect(clamp(NaN, -5, 5)).toBeNaN()
        expect(clamp(-5, NaN, 5)).toBe(0);
        expect(clamp(5, -5, NaN)).toBe(0);
    });

    test.failing("test null values", () => {
       expect(clamp(null, -5, 5)).toBe(0);
       expect(clamp(5, null, 5)).toBe(5);
       expect(clamp(-5, -5, null)).toBe(-5);
    });
});