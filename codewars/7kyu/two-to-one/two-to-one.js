/*
two-to-one

# codewars/7kyu/Two to One
 Difficulty: 7kyu
URL: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/

## Approach

### en

### kr

## Solution
### JavaScript

*/

function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('');
}

// test
console.log(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'), 'abcdefghilnoprstu');
console.log(longest('inmanylanguages', 'theresapairoffunctions'), 'acefghilmnoprstuy');

