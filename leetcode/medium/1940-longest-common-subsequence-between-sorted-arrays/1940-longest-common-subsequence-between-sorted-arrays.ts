/*
1940-longest-common-subsequence-between-sorted-arrays
leetcode/medium/1940. Longest Common Subsequence Between Sorted Arrays
URL: https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function intersect(arr1, arr2) {
  return arr1.filter((n) => arr2.indexOf(n) != -1);
}

function longestCommonSubsequence(arrays: number[][]): number[] {
  return arrays.reduce((acc, cur) => {
    return intersect(acc, cur);
  });
}

let arrays = [[1, 3, 4],
  [1, 4, 7, 9]];

console.log(longestCommonSubsequence(arrays));
// Output: [1,4]

arrays = [[2, 3, 6, 8],
  [1, 2, 3, 5, 6, 7, 10],
  [2, 3, 4, 6, 9]];

console.log(longestCommonSubsequence(arrays));
// Output: [2,3,6]

arrays = [[1, 2, 3, 4, 5],
  [6, 7, 8]];
console.log(longestCommonSubsequence(arrays));
// Output: []
