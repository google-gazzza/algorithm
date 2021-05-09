/*
deodorant-evaporator

# codewars/7kyu/Deodorant Evaporator
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/javascript
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function evaporator(content, evap_per_day, threshold) {
  let count = 0;
  let e = 1 - (evap_per_day / 100);
  const t = threshold / 100;
  
  while ((e ** count) > t) {
    count += 1;
  }
  return count;
}

console.log(evaporator(10, 10, 5), 29);
console.log(evaporator(10, 10, 10), 22);

function evaporatorLog(content, evap_per_day, threshold) {
  let e = 1 - (evap_per_day / 100);
  const t = threshold / 100;
  
  return Math.ceil(Math.log(t) / Math.log(e));
}

console.log(evaporatorLog(10, 10, 5), 29);
console.log(evaporatorLog(10, 10, 10), 22);
