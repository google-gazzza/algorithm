/*
regexp-basics-is-it-a-letter

# codewars/7kyu/Regexp Basics - is it a letter?
Difficulty: 7kyu
URL: https://www.codewars.com/kata/567de72e8b3621b3c300000b/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

String.prototype.isLetter = function () {
  if (this.length === 0) {
    return false;
  }
  
  return this.replace(/[a-z]/i, '').length === 0;
};

// test
console.log("".isLetter(), false);
console.log("a".isLetter(), true);
console.log("X".isLetter(), true);
console.log("7".isLetter(), false);
console.log("*".isLetter(), false);
console.log("ab".isLetter(), false);
