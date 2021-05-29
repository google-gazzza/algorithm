/*
difference-of-volumes-of-cuboids

# codewars/8kyu/Difference of Volumes of Cuboids
Difficulty: 8kyu
URL: https://www.codewars.com/kata/58cb43f4256836ed95000f97
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const multiplyingAll = (arr) => arr.reduce((acc, cur) => acc * cur, 1);

function findDifference(a, b) {
  const x = multiplyingAll(a);
  const y = multiplyingAll(b);
  
  return Math.max(x, y) - Math.min(x, y);
}

test('findDifference', () => {
  expect(findDifference([3, 2, 5], [1, 4, 4])).toEqual(14);
  expect(findDifference([9, 7, 2], [5, 2, 2])).toEqual(106);
  expect(findDifference([11, 2, 5], [1, 10, 8])).toEqual(30);
  expect(findDifference([4, 4, 7], [3, 9, 3])).toEqual(31);
  expect(findDifference([15, 20, 25], [10, 30, 25])).toEqual(0);
});
