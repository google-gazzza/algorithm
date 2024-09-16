// leetcode/easy/1133. Largest Unique Number
// 1133-largest-unique-number
// URL: https://leetcode.com/problems/largest-unique-number/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function largestUniqueNumber(nums: number[]): number {
  const map: Map<number, number> = new Map();

  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  const uniqNumbers = [...map.entries()]
    .filter((entry) => entry[1] === 1)
    .map((entry) => entry[0]);

  if (uniqNumbers.length === 0) {
    return -1;
  }

  return Math.max(...uniqNumbers);
}

let nums = [5, 7, 3, 9, 4, 9, 8, 3, 1];
console.log(largestUniqueNumber(nums));
// Output: 8

nums = [9, 9, 8, 8];
console.log(largestUniqueNumber(nums));
// Output: -1
