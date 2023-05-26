/*
remove-duplicates-from-list

# codewars/8kyu/Remove duplicates from list
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function distinct(a) {
  return [...new Set(a).values()];
}

function distinct(a) {
  return [...new Set(a)];
}

test("distinct", () => {
  expect(distinct([1])).toEqual([1]);
  expect(distinct([1, 2])).toEqual([1, 2]);
  expect(distinct([1, 1, 2])).toEqual([1, 2]);
});
