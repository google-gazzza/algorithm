// leetcode/easy/1752. Check if Array Is Sorted and Rotated
// 1752-check-if-array-is-sorted-and-rotated
// URL: https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/

function check(nums: number[]): boolean {
  const sortedCopy = [...nums].sort((a, b) => a - b);

  if (sortedCopy.length === 1) {
    return true;
  }

  if (JSON.stringify(nums) === JSON.stringify(sortedCopy)) {
    return true;
  }

  let minIndex;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    if (nums[i] < nums[i - 1]) {
      minIndex = i;
      break;
    }
  }

  const left = nums.slice(0, minIndex);
  const right = nums.slice(minIndex);
  const merged = right.concat(left);

  if (JSON.stringify(sortedCopy) === JSON.stringify(merged)) {
    return true;
  }

  return false;
}

let nums = [3, 4, 5, 1, 2];
console.log(check(nums));
// Output: true

nums = [2, 1, 3, 4];
console.log(check(nums));
// Output: false

nums = [1, 2, 3];
console.log(check(nums));
// Output: true

nums = [6, 10, 6];
console.log(check(nums));
