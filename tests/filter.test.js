import filter from "../src/filter.js";

describe("tests for filter", () => {
   test("should filter array based on predicate for even numbers", () => {
       const array = [1, 2, 3, 4, 5];
       const result = filter(array, (num) => num % 2 === 0);
       expect(result).toEqual([2, 4]);
   });

   test("should filter array based on predicate for odd numbers", () => {
       const array = [1, 2, 3, 4, 5];
       const result = filter(array, (num) => num % 2 === 1);
       expect(result).toEqual([1, 3, 5]);
   });

   test("should return empty array inside an array for input of empty array", () => {
       const array = [];
       const result = filter(array, (num) => num);
       expect(result).toEqual([[]]);
   });

   test("should return empty array inside an array with input of null", () => {
       const array = null;
       const result = filter(array, (num) => num);
       expect(result).toEqual([[]]);
   });

   test("should throw TypeError if predicate is null", () => {
      const array = [1, 2, 3, 4, 5];
      expect(() => filter(array, null)).toThrow(TypeError);
   });

    test("should throw TypeError if predicate is undefined", () => {
        const array = [1, 2, 3, 4, 5];
        expect(() => filter(array, undefined)).toThrow(TypeError);
    });
});