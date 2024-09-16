/*
1852-distinct-numbers-in-each-subarray
leetcode/medium/1852. Distinct Numbers in Each Subarray
URL: https://leetcode.com/problems/distinct-numbers-in-each-subarray/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function distinctNumbers(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  const set = new Set();

  for (let i = 0; i < k; i += 1) {
    const num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
    set.add(num);
  }

  const result: number[] = [];

  for (let i = k; i <= nums.length; i += 1) {
    result.push(set.size);

    map.set(nums[i - k], map.get(nums[i - k]) - 1);

    if (map.get(nums[i - k]) === 0) {
      set.delete(nums[i - k]);
    }

    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    set.add(nums[i]);
  }

  return result;
}

let nums = [1, 2, 3, 2, 2, 1, 3];
let k = 3;
console.log(distinctNumbers(nums, k));
// Output: [3,2,2,2,3]

nums = [1, 1, 1, 1, 2, 3, 4], k = 4;
console.log(distinctNumbers(nums, k));
// Output: [1,2,3,4]
