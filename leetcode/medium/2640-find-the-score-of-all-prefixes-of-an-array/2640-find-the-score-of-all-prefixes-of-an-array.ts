/*
leetcode/medium/2640. Find the Score of All Prefixes of an Array
2640-find-the-score-of-all-prefixes-of-an-array
uRL: https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function findPrefixScore(nums: number[]): number[] {
  let max = 0;
  const result: number[] = [];

  nums.forEach((num) => {
    max = Math.max(max, num);
    result.push(num + max);
  });

  for (let i = 1; i < result.length; i++) {
    result[i] += result[i - 1];
  }

  return result;
}

let nums = [2, 3, 7, 5, 10];
console.log(findPrefixScore(nums));
// Output: [4,10,24,36,56]

nums = [1, 1, 2, 4, 8, 16];
console.log(findPrefixScore(nums));
// Output: [2,4,8,16,32,64]
