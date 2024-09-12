/*
sentence-smash

# codewars/8kyu/Sentence Smash
Difficulty: 8kyu
URL: https://www.codewars.com/kata/53dc23c68a0c93699800041d/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const smash = (words) => words.join(' ');

test('smash', () => {
  expect(smash(["hello"])).toEqual("hello");
  expect(smash(["hello", "world"])).toEqual("hello world");
});
