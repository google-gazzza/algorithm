/*
simple-multiplication

# codewars/8kyu/Simple multiplication
Difficulty: 8kyu
URL: https://www.codewars.com/kata/583710ccaa6717322c000105/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

test('simpleMultiplication', () => {
  expect(simpleMultiplication(2)).toEqual(16);
  expect(simpleMultiplication(1)).toEqual(9);
  expect(simpleMultiplication(8)).toEqual(64);
  expect(simpleMultiplication(4)).toEqual(32);
  expect(simpleMultiplication(5)).toEqual(45);
});
