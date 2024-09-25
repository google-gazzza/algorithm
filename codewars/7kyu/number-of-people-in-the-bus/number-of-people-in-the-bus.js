/*
number-of-people-in-the-bus

# codewars/7kyu/Number of People in the Bus
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5648b12ce68d9daa6b000099
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const number = (busStops) => {
  const [a, b] = busStops.reduce((acc, cur) => {
    acc[0] += cur[0];
    acc[1] += cur[1];
    return acc;
  });
  
  return a - b;
};

console.log(number([[10, 0], [3, 5], [5, 8]]), 5);
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17);
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21);
