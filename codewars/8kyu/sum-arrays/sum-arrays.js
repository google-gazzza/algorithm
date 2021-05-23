/*
sum-arrays

# codewars/8kyu/Sum Arrays
Difficulty: 8kyu
URL: https://www.codewars.com/kata/53dc54212259ed3d4f00071c/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const sum = (numbers) => numbers.reduce((acc, cur) => acc + cur, 0);

test('sum', () => {
  expect(sum([])).toEqual(0);
  expect(sum([1, 5.2, 4, 0, -1])).toEqual(9.2);
});
