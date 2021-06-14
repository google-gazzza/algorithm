/*
word-values

# codewars/7kyu/Word values
Difficulty: 7kyu
URL: https://www.codewars.com/kata/598d91785d4ce3ec4f000018/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function wordValue(a) {
  return a.map((str, i) => {
    str = str.match(/[a-z]/g);
    const strValue = [...(str ||'')].reduce((acc, character) => acc + (character.charCodeAt() - 96), 0);
    
    return strValue * (i + 1);
  });
}

test("wordValue", function () {
  expect(wordValue(["codewars", "abc", "xyz"])).toEqual([88, 12, 225]);
  expect(wordValue(["abc abc", "abc abc", "abc", "abc"])).toEqual([12, 24, 18, 24]);
});
