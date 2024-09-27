/*
counting-sheep

# codewars/8kyu/Counting sheep...
Difficulty: 8kyu
URL: https://www.codewars.com/kata/54edbc7200b811e956000556/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const countSheeps = (arrayOfSheep) => arrayOfSheep.filter((e) => e).length;

// test
const array1 = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true];

console.log(countSheeps(array1),  17)
