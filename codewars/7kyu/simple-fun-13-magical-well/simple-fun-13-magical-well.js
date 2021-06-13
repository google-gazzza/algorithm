/*
simple-fun-13-magical-well

# codewars/7kyu/Simple Fun #13: Magical Well
Difficulty: 7kyu
URL: https://www.codewars.com/kata/588463cae61257e44600006d/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function magicalWell(a, b, n) {
  let sum = 0;
  
  for (let i = 0; i < n; i += 1) {
    sum += (a * b);
    a += 1;
    b += 1;
  }
  
  return sum;
}


test("magicalWell", () => {
  expect(magicalWell(1, 2, 2)).toEqual(8);
  expect(magicalWell(1, 1, 1)).toEqual(1);
  expect(magicalWell(6, 5, 3)).toEqual(128);
});
