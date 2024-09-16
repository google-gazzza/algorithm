/*
life-path-number

# codewars/7kyu/Life Path Number
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5a1a76c8a7ad6aa26a0007a0/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/


function recursiveSum(str) {
  const sum = [...str].reduce((acc, cur) => acc + Number(cur), 0);
  
  if (sum < 10) {
    return Number(sum);
  }
  
  return recursiveSum(String(sum));
}

function lifePathNumber(dateOfBirth) {
  return recursiveSum(dateOfBirth.split('-')
    .map(recursiveSum));
}

// test
console.log(lifePathNumber("1879-03-14"), 6);
console.log(lifePathNumber("1815-12-10"), 1);
console.log(lifePathNumber("1961-07-04"), 1);
console.log(lifePathNumber("1955-10-28"), 4);
console.log(lifePathNumber("1452-04-15"), 4);
console.log(lifePathNumber("1791-12-26"), 2);
console.log(lifePathNumber("1906-12-09"), 1);
console.log(lifePathNumber("1912-06-23"), 6);
console.log(lifePathNumber("1950-08-11"), 7);
console.log(lifePathNumber("1956-01-31"), 8);
console.log(lifePathNumber("1965-04-14"), 3);
console.log(lifePathNumber("1971-06-28"), 7);
