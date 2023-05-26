/*
sum-by-factors

# codewars/4kyu/Sum by Factors
Difficulty: 4kyu
URL: https://www.codewars.com/kata/54d496788776e49e6b00052f/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

const isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

function sumOfDivided(list) {
  let num = 2;
  const max = Math.max(...list.map((e) => Math.abs(e)));
  const result = [];
  
  while (num <= max) {
    if (isPrime(num)) {
      let isExist = false;
      const sum = list.reduce((acc, cur) => {
        if (cur % num === 0) {
          isExist = true;
          return acc + cur;
        }
        return acc;
      }, 0);
      
      if (isExist) {
        result.push([num, sum]);
      }
    }
    num += 1;
  }
  
  return result;
}

// test
console.log(sumOfDivided([12, 15]), [[2, 12], [3, 27], [5, 15]]);
console.log(sumOfDivided([15, 21, 24, 30, 45]), [[2, 54], [3, 135], [5, 90], [7, 21]]);
console.log(sumOfDivided([-29804, -4209, -28265, -72769, -31744]));
