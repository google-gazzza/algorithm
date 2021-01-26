/*
reverse-words

# codewars/7kyu/Reverse words
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/

## Approach

### en

### kr

## Solution
### JavaScript

*/

function reverseWords(str) {
  return str.split(' ').map((e) => [...e].reverse().join('')).join(' ');
}

// test
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
