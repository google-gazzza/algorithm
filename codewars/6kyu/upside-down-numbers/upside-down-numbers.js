/*
upside-down-numbers

# codewars/6kyu/Upside down numbers
Difficulty: 6kyu
URL: https://www.codewars.com/kata/59f7597716049833200001eb/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function solve(x, y) {
  const rotationTable = {
    0: 0,
    1: 1,
    2: null,
    3: null,
    4: null,
    5: null,
    6: 9,
    7: null,
    8: 8,
    9: 6,
  };
  
  let count = 0;
  
  for (let i = x; i < y; i += 1) {
    const rotatedNumber = [...String(i)].reverse()
      .map((e) => rotationTable[e])
      .join('');
    
    if (rotatedNumber === String(i)) {
      count += 1;
    }
  }
  
  return count;
}

// test
console.log(solve(0, 10), 3);
console.log(solve(10, 100), 4);
console.log(solve(100, 1000), 12);
console.log(solve(1000, 10000), 20);
console.log(solve(10000, 15000), 6);
console.log(solve(15000, 20000), 9);
console.log(solve(60000, 70000), 15);
console.log(solve(60000, 130000), 55);
console.log(solve(0, 88), 5);
