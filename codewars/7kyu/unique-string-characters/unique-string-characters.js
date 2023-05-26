/*
unique-string-characters

# codewars/7kyu/Unique string characters
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5a262cfb8f27f217f700000b/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const getUniqChars = (a, b) => [...a].filter((e) => b.indexOf(e) === -1);

function solve(a, b) {
  return getUniqChars(a, b).concat(getUniqChars(b, a)).join('');
}

// test
console.log(solve("xyab", "xzca"), "ybzc");
console.log(solve("xyabb", "xzca"), "ybbzc");
console.log(solve("abcd", "xyz"), "abcdxyz");
console.log(solve("xxx", "xzca"), "zca");
