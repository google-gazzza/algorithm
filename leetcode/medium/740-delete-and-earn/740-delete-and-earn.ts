/*
740-delete-and-earn
leetcode/medium/740. Delete and Earn
URL: https://leetcode.com/problems/delete-and-earn/

NOTE: Description
NOTE: Constraints
  - 1 <= nums.length <= 2 * 104
  - 1 <= nums[i] <= 104
NOTE: Explanation
NOTE: Reference
*/

function deleteAndEarn(nums: number[]): number {
  const map = new Map<number, number>();

  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + num);
    } else {
      map.set(num, num);
    }
  });

  const sortedValues = Array.from(map.keys()).sort((a, b) => a - b);

  for (let i = 1; i < sortedValues.length; i += 1) {
    const target = sortedValues[i];

    if (sortedValues[i - 1] === target - 1) {
      map.set(target, map.get(target)
        + Math.max(
          (map.get(sortedValues[i - 2]) || 0),
          (map.get(sortedValues[i - 3]) || 0),
        ));
    } else {
      map.set(target, map.get(target)
        + Math.max(
          (map.get(sortedValues[i - 1]) || 0),
          (map.get(sortedValues[i - 2]) || 0),
        ));
    }
  }

  return Math.max(
    map.get(sortedValues[sortedValues.length - 1]),
    (map.get(sortedValues[sortedValues.length - 2]) || 0),
  );
}

let nums = [3, 4, 2];
console.log(deleteAndEarn(nums));

nums = [2, 2, 3, 3, 3, 4];
console.log(deleteAndEarn(nums));

nums = [3, 1];
console.log(deleteAndEarn(nums));

nums = [1];
console.log(deleteAndEarn(nums));

nums = [1, 1, 1, 2, 4, 5, 5, 5, 6];
console.log(deleteAndEarn(nums));