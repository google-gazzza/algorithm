/*
1331-rank-transform-of-an-array
leetcode/easy/1331. Rank Transform of an Array
URL: https://leetcode.com/problems/rank-transform-of-an-array/

NOTE: Description
NOTE: Constraints
  - 0 <= arr.length <= 105
  - -109 <= arr[i] <= 109

NOTE: Explanation
NOTE: Reference
*/


// NOTE: O(n log n) solution.
function arrayRankTransform(arr: number[]): number[] {
  const resultMap = new Map<number, number>();
  const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);

  sortedArr.forEach((num, index) => {
    resultMap.set(num, index);
  });

  return arr.map((num) => resultMap.get(num) + 1);
}

// NOTE: O(n^2) solution.
function arrayRankTransform_NaiveSolution(arr: number[]): number[] {
  const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);

  return arr.map((num) => sortedArr.indexOf(num) + 1);
}

let arr = [40, 10, 20, 30];
console.log(arrayRankTransform(arr));
// Output: [4,1,2,3]

arr = [100, 100, 100];
console.log(arrayRankTransform(arr));
// Output: [1,1,1]

arr = [37, 12, 28, 9, 100, 56, 80, 5, 12];
console.log(arrayRankTransform(arr));
// Output: [5,3,4,2,8,6,7,1,3]
