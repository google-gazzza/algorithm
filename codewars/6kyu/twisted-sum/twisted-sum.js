/*
twisted-sum

# codewars/6kyu/Twisted Sum
Difficulty: 6kyu
URL: https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function twistedSum(n) {
  let sum = 0;
  
  for (let i = 1; i <= n; i += 1) {
    sum += [...String(i)].reduce((acc, cur) => acc + Number(cur), 0);
  }
  
  return sum;
}

// test
console.log(twistedSum(3), 6);
console.log(twistedSum(10), 46);
console.log(twistedSum(11), 48);
console.log(twistedSum(12), 51);
