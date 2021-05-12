/*
series-of-integers-from-m-to-n

# codewars/7kyu/Series of integers from m to n
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5841f680c5c9b092950001ae
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function generateIntegers(m, n) {
  const result = [];
  
  for (let i = m; i <= n; i += 1) {
    result.push(i);
  }
  
  return result;
}

console.log(generateIntegers(2, 5), [2, 3, 4, 5]);
