/*
homogenous-arrays

# codewars/7kyu/Homogenous arrays
Difficulty: 7kyu
URL: https://www.codewars.com/kata/57ef016a7b45ef647a00002d/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const filterHomogenous = (arrays) => arrays.filter((array) => {
  return array.length ? array.every((e, i, arr) => typeof e === typeof arr[0]) : false;
});

test("test", () => {
  expect(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))
    .toEqual([[1, 5, 4], ['b']]);
  expect(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]))
    .toEqual([[123, 234, 432], ['', 'abc'], [''], ['', '1']]);
});
