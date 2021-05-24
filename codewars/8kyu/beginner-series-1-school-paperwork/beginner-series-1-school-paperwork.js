/*
beginner-series-1-school-paperwork

# codewars/8kyu/Beginner Series #1 School Paperwork
Difficulty: 8kyu
URL: https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function paperwork(n, m) {
  return Math.max(0, n) * Math.max(0, m);
}

test('paperwork', () => {
  expect(paperwork(5, 5)).toEqual(25);
  expect(paperwork(-5, 5)).toEqual(0);
});
