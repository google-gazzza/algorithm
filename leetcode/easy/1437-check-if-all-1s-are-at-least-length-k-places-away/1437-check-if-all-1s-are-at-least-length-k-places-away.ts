// leetcode/easy/1437. Check If All 1's Are at Least Length K Places Away
// 1437-check-if-all-1s-are-at-least-length-k-places-away
// URL: https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/


function kLengthApart(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      let j = i + 1;
      let count = 0;

      while (j < nums.length && count < k) {
        if (nums[j] === 0) {
          count++;
        } else {
          return false;
        }
        j++;
      }

      i = j - 1;
    }
  }

  return true;
};

let nums = [1, 0, 0, 0, 1, 0, 0, 1];
let k = 2;
console.log(kLengthApart(nums, k));
// Output: true
nums = [1, 0, 0, 1, 0, 1];
k = 2;
console.log(kLengthApart(nums, k));
// Output: false
