/*
be-concise-iii-sum-squares

# codewars/8kyu/Be Concise III - Sum Squares
Difficulty: 8kyu
URL: https://www.codewars.com/kata/56f8fe6a2e6c0dc83b0008a7/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const sumSquares = (array) => array.reduce((acc, cur) => acc + cur ** 2, 0);

test("should behave in exactly the same way as the program prior to refactoring for the range of inputs tested", () => {
  expect(sumSquares([1, 2, 3, 4, 5])).toEqual(55);
  expect(sumSquares([7, 3, 9, 6, 5])).toEqual(200);
  expect(sumSquares([11, 13, 15, 18, 2])).toEqual(843);
  expect(sumSquares([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])).toEqual(110);
});
