/*
how-many-consecutive-numbers-are-needed

# codewars/7kyu/How many consecutive numbers are needed?
Difficulty: 7kyu
URL: https://www.codewars.com/kata/559cc2d2b802a5c94700000c/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/
const consecutive = (arr) => {
  if (arr.length) {
    return Math.max(...arr) - Math.min(...arr) + 1 - arr.length;
  }
  
  return 0;
};

test("test", () => {
  expect(consecutive([4, 8, 6])).toEqual(2);
  expect(consecutive([1, 2, 3, 4])).toEqual(0);
  expect(consecutive([])).toEqual(0);
  expect(consecutive([1])).toEqual(0);
});
