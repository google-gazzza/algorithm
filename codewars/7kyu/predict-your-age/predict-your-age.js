/*
predict-your-age

# codewars/7kyu/Predict your age!
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5aff237c578a14752d0035ae/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function predictAge(...ages) {
  return Math.floor(ages.reduce((acc, cur) => acc + cur ** 2, 0) ** (1 / 2) / 2);
}

// test
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
