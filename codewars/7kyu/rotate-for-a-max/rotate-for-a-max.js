/*
rotate-for-a-max

# codewars/7kyu/Rotate for a Max
Difficulty: 7kyu
URL: https://www.codewars.com/kata/56a4872cbb65f3a610000026
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function maxRot(n) {
  const nums = [...String(n)];
  const left = [];
  const right = nums;
  const result = [n];
  
  for (let i = 0; i < nums.length; i+=1) {
    right.push(right.shift());
    left.push(right.shift());
    
    result.push(Number(left.concat(right).join('')));
  }
  
  return Math.max(...result);
}

// test
console.log(maxRot(38458215), 85821534);
console.log(maxRot(195881031), 988103115);
console.log(maxRot(896219342), 962193428);
console.log(maxRot(69418307), 94183076);
console.log(maxRot(630571299), 630571299);
