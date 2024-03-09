// leetcode/medium/1035. Uncrossed Lines
// 1035-uncrossed-lines
// URL: https://leetcode.com/problems/uncrossed-lines/description/?envType=study-plan-v2&envId=dynamic-programming


function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  const matrix = [];

  for (let i = 0; i < nums1.length; i++) {
    matrix[i] = new Array(nums2.length + 1).fill(0);

    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        matrix[i][j] = (matrix[i - 1]?.[j - 1] || 0) + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i - 1]?.[j] || 0, matrix[i]?.[j - 1] || 0);
      }
    }
  }

  return matrix[nums1.length - 1][nums2.length - 1];
}

let nums1 = [1, 4, 2];
let nums2 = [1, 2, 4];
console.log(maxUncrossedLines(nums1, nums2));
// Output: 2

nums1 = [2, 5, 1, 2, 5];
nums2 = [10, 5, 2, 1, 5, 2];
console.log(maxUncrossedLines(nums1, nums2));
// Output: 3

nums1 = [1, 3, 7, 1, 7, 5];
nums2 = [1, 9, 2, 5, 1];
console.log(maxUncrossedLines(nums1, nums2));
// Output: 2
