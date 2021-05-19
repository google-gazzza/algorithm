/*
how-good-are-you-really

# codewars/8kyu/How good are you really?
Difficulty: 8kyu
URL: https://www.codewars.com/kata/5601409514fc93442500010b
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function betterThanAverage(classPoints, yourPoints) {
  return (classPoints.reduce((acc, cur) => acc + cur) / classPoints.length) < yourPoints;
}

test('betterThanAverage', () => {
  expect(betterThanAverage([2, 3], 5)).toBeTruthy();
  expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toBeTruthy();
  expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)).toBeFalsy();
});
