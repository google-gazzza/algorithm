/*
first-non-repeating-character

# codewars/5kyu/First non-repeating character
Difficulty: 5kyu
URL: https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/solutions/javascript
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const firstNonRepeatingLetter = (s) => {
  let result = '';
  
  [...s].some((e) => {
    if (s.match(new RegExp(e, 'gi')).length === 1) {
      result = e;
      return true;
    }
  });
  
  return result;
};

// test
console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
console.log(firstNonRepeatingLetter(''), 'a');
