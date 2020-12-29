/*
sum-of-two-lowest-positive-integers

# codewars/7kyu/sum-of-two-lowest-positive-integers
Difficulty: 7kyu
URL: https://www.codewars.com/kata/558fc85d8fd1938afb000014

## Approach

### en
1.Sort in ascending order
2.slice index 0 to 2
3.sum sliced array and return

### kr
1.오름차순으로 정렬합니다.
2.index 0부터 2까지 잘라냅니다
3.잘라낸 어레이를 합산한후 리턴합니다.

## Solution
### JavaScript
*/

const sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => a - b)
  .slice(0, 2)
  .reduce((acc, cur) => acc + cur);

// test
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
