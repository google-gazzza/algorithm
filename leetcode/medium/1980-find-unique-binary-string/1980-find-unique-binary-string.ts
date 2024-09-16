/*
# leetcode/medium/1980. Find Unique Binary String
# 1980-find-unique-binary-string
# URL: https://leetcode.com/problems/find-unique-binary-string/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function findDifferentBinaryString(nums: string[]): string {
  let candidate = '1';
  const targetLength = nums[0].length;
  const numSet = new Set(nums);

  if (!numSet.has('0'.padStart(targetLength, '0'))) {
    return '0'.repeat(targetLength);
  }

  while (numSet.has(candidate.padStart(targetLength, '0'))) {
    if (candidate[candidate.length - 1] === '1') {
      candidate = candidate + '0';
    } else {
      candidate = candidate + '1';
    }
  }

  return candidate.padStart(targetLength, '0');
}

let nums = ['01', '10'];
findDifferentBinaryString(nums);
// Output: "11"
nums = ['00', '01'];
findDifferentBinaryString(nums);
// Output: "11"
nums = ['111', '011', '001'];
findDifferentBinaryString(nums);
// Output: "101"
