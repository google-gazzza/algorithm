/*
simple-consecutive-pairs

# codewars/7kyu/Simple consecutive pairs
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5a3e1319b6486ac96f000049/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function pairs(arr) {
  let result = 0;
  
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] < 0 && arr[i + 1] < 0) {
      if (Math.abs(Math.abs(arr[i]) - Math.abs(arr[i + 1])) === 1) {
        result += 1;
      }
    } else if (Math.abs(arr[i] - arr[i + 1]) === 1) {
      result += 1;
    }
  }
  
  return result;
}

// test
console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]), 3);
console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]), 2);
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]), 0);
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]), 4);
console.log(pairs([73, 72, 8, 9, 73, 72]), 3);
