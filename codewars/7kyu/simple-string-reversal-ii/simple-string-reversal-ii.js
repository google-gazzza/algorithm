/*
simple-string-reversal-ii

# codewars/7kyu/Simple string reversal II
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function solve(st, a, b) {
  return st.slice(0, a)
    .concat([...st.slice(a, b + 1)].reverse().join(''))
    .concat(st.slice(b + 1));
}

// test
console.log(solve("codewars", 1, 5), "cawedors");
console.log(solve("codingIsFun", 2, 100), "conuFsIgnid");
console.log(solve("FunctionalProgramming", 2, 15), "FuargorPlanoitcnmming");
console.log(solve("abcdefghijklmnopqrstuvwxyz", 0, 20), "utsrqponmlkjihgfedcbavwxyz");
console.log(solve("abcdefghijklmnopqrstuvwxyz", 5, 20), "abcdeutsrqponmlkjihgfvwxyz");
