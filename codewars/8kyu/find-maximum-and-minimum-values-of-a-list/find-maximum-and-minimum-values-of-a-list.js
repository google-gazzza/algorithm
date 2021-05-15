/*
find-maximum-and-minimum-values-of-a-list

# codewars/8kyu/Find Maximum and Minimum Values of a List
Difficulty: 8kyu
URL: https://www.codewars.com/kata/577a98a6ae28071780000989/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

test('test min-max', () => {
  expect(min([-52, 56, 30, 29, -54, 0, -110])).toBe(-110);
  expect(min([42, 54, 65, 87, 0])).toBe(0);
  expect(max([4, 6, 2, 1, 9, 63, -134, 566])).toBe(566);
  expect(max([5])).toBe(5);
});
