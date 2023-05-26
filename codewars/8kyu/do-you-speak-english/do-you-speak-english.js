/*
do-you-speak-english

# codewars/8kyu/Do you speak "English"?
Difficulty: 8kyu
URL: https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

// use RegExp test
function spEng(s){
  return /english/i.test(s)
}

// use RegExp match
const spEng = (sentence) => !!sentence.match(/english/gi);


test("spEng", () => {
  expect(spEng("english")).toBeTruthy();
  expect(spEng("egnlish")).toBeFalsy();
});
