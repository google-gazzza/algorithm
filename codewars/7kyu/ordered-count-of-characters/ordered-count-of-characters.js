/*
ordered-count-of-characters

# codewars/7kyu/Ordered Count of Characters
Difficulty: 7kyu
URL: https://www.codewars.com/kata/57a6633153ba33189e000074/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

const orderedCount = function (text) {
  const result = [...text].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  
  return [...new Set([...text]).keys()]
    .map((e) => [e, result[e]]);
};

// test
console.log(orderedCount('abracadabra'), [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);
console.log(orderedCount('233312'));
