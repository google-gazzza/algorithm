/*
simple-beads-count

# codewars/7kyu/Simple beads count
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58712dfa5c538b6fc7000569
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function countRedBeads(n) {
  return Math.max((n - 1) * 2, 0);
}

// test
console.log(countRedBeads(0), 0);
console.log(countRedBeads(1), 0);
console.log(countRedBeads(3), 4);
console.log(countRedBeads(5), 8);
