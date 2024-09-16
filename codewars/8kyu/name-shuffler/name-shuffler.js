/*
name-shuffler

# codewars/8kyu/Name Shuffler
Difficulty: 8kyu
URL: https://www.codewars.com/kata/559ac78160f0be07c200005a/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const nameShuffler = (str) => str.split(' ').reverse().join(' ');

test("nameShuffler", () => {
  expect(nameShuffler('john McClane')).toEqual('McClane john');
});
