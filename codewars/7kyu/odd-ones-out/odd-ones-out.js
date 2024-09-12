/*
odd-ones-out

# codewars/7kyu/Odd Ones Out!
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function oddOnesOut(nums) {
  const countMap = {};
  nums.forEach((e) => {
    countMap[e] = (countMap[e] || 0) + 1;
  });
  
  return nums.filter((e) => countMap[e] % 2 !== 1);
}

// test
console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);
