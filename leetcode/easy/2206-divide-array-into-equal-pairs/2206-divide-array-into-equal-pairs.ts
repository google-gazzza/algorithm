/*
2206-divide-array-into-equal-pairs
leetcode/easy/2206. Divide Array Into Equal Pairs
URL: https://leetcode.com/problems/divide-array-into-equal-pairs/

NOTE: Description
NOTE: Constraints
  - nums.length == 2 * n
  - 1 <= n <= 500
  - 1 <= nums[i] <= 500

NOTE: Explanation
NOTE: Reference
*/

function divideArray(nums: number[]): boolean {
  const countMap: { [key: number]: number } = {};

  nums.forEach((e: number) => {
    if (!countMap[e]) {
      countMap[e] = 0;
    }
    countMap[e] += 1;
  });

  return Array.from(Object.entries(countMap))
    .every(([, val]) => val % 2 === 0);
}

let nums = [3, 2, 3, 2, 2, 2];
console.log(divideArray(nums));
// Output: true

nums = [1, 2, 3, 4];
console.log(divideArray(nums));
// Output: false