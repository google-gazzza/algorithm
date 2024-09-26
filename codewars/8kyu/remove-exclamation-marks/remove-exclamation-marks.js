/*
remove-exclamation-marks

# codewars/8kyu/Remove exclamation marks
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

test('removeExclamationMarks', () => {
  expect(removeExclamationMarks("Hello World!")).toEqual("Hello World");
});
