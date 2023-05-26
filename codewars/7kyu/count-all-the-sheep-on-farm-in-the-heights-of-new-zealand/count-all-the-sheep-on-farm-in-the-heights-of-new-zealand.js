/*
count-all-the-sheep-on-farm-in-the-heights-of-new-zealand

# codewars/7kyu/count all the sheep on farm in the heights of new zealand
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58e0f0bf92d04ccf0a000010
tag: reduce

## Approach

### en
1.concat arr1, arr2
2.reduce process-1 and sum
3.return total - process-2

### kr
1.arr1, arr2를 합칩니다.
2.process-1을 reduce를 통해 합산합니다.
3.total -  process-2를 리턴 합니다.

## Solution
### JavaScript

*/
const lostSheep = (arr1, arr2, total) => total - arr1.concat(arr2).reduce((acc, cur) => acc + cur, 0);

// test
console.log(lostSheep([1, 2], [3, 4], 15), 5);
console.log(lostSheep([3, 1, 2], [4, 5], 21), 6);
console.log(lostSheep([5, 1, 4], [5, 4], 29), 10);
console.log(lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300), 178);
console.log(lostSheep([2, 7, 13, 17], [23, 56, 44, 12, 1, 2, 1,], 255), 77);
console.log(lostSheep([2, 5, 8], [11, 23, 3, 4, 15, 112, 12, 4], 355), 156);
console.log(lostSheep([1, 1, 1, 2, 1, 2], [2, 1, 2, 1, 2, 1], 30), 13);
console.log(lostSheep([5, 10, 15], [11, 23, 3, 4, 15], 89), 3);
console.log(lostSheep([3, 6, 9, 12], [3, 2, 1, 2, 3, 1], 44), 2);
console.log(lostSheep([], [], 15), 15);
