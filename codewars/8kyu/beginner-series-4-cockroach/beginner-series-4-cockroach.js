/*
beginner-series-4-cockroach

# codewars/8kyu/Beginner Series #4 Cockroach
Difficulty: 8kyu
URL: https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function cockroachSpeed(s) {
  return Math.floor(s * 1000 * 100 / 3600);
}

test('cockroachSpeed', () => {
  expect(cockroachSpeed(1.08)).toEqual(30);
  expect(cockroachSpeed(1.09)).toEqual(30);
  expect(cockroachSpeed(0)).toEqual(0);
});
