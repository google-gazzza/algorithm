/*
find-the-capitals

# codewars/7kyu/Find the capitals
Difficulty: 7kyu
URL: https://www.codewars.com/kata/539ee3b6757843632d00026b/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/
const capitals = (word) => [...word].reduce((acc, cur, i) => {
  if (cur.match(/[A-Z]/)) {
    acc.push(i);
  }
  return acc;
}, []);

// test
console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
