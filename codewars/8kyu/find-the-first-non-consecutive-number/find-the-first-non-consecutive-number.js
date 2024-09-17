/*
find-the-first-non-consecutive-number

# codewars/8kyu/Find the first non-consecutive number
Difficulty: 8kyu
URL: https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

// ----------------------------
// best practice
// ----------------------------
function firstNonConsecutive (arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);
  
  return (Number.isInteger(result)) ? result : null;
}

test('test', () => {
  expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toBe(6);
});

// ----------------------------
// shit solution
// ----------------------------
function firstNonConsecutive(input) {
  let targetIndex = 0;
  
  if (input.length === 1) {
    return input[0];
  }
  
  input.some((e, i, arr) => {
    if ((e + 1) !== input[i + 1]) {
      targetIndex = i + 1;
      return true;
    }
  });
  
  return input[targetIndex] !== undefined ? input[targetIndex] : null;
}
