import difference from '../src/difference.js';

describe('tests for difference', () => {
    test ("should return the elements from the first array that are not present in the second array", () => {
        const array1 = [1,2];
        const array2 = [1,3];
        const result = difference(array1, array2);
        expect(result).toEqual([2]);
    });

    test("should return an empty array when both arrays are the same", () => {
        const array1 = [1,2];
        const array2 = [1,2];
        const result = difference(array1, array2);
        expect(result).toEqual([]);
    });

    test("should return an empty array when the elements of the first array are all present in the second array", () => {
        const array1 = [1,2];
        const array2 = [1,2,3,4,5,6,7,8,9,10];
        const result = difference(array1, array2);
        expect(result).toEqual([]);
    });

    test("should return the first array when the second array is empty", () => {
        const array1 = [1,2,3];
        const array2 = [];
        const result = difference(array1, array2);
        expect(result).toEqual([1,2,3]);
    });

    test("should return an empty array when the first array is empty", () => {
        const array1 = [];
        const array2 = [1,2,3];
        const result = difference(array1, array2);
        expect(result).toEqual([]);
    });

});