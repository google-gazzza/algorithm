/*
number-of-occurrences

# codewars/7kyu/Number Of Occurrences
Difficulty: 7kyu
URL: https://www.codewars.com/kata/52829c5fe08baf7edc00122b/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

Array.prototype.numberOfOccurrences = function (x) {
  return this.filter((e) => e == x).length;
};

// test
var arr = [4, 0, 4];
console.log(arr.numberOfOccurrences(4), 2);
