/*
counting-array-elements

# codewars/7kyu/Counting Array Elements
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5569b10074fe4a6715000054
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function count(array) {
  return array.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}

// test
console.log(count(['a', 'a', 'b', 'b', 'b']), { 'a': 2, 'b': 3 });
