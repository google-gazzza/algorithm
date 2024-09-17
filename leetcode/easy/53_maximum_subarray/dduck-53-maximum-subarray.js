/*
53-maximum-subarray

# leetcode/easy/53. Maximum Subarray
Difficulty: 53. Maximum Subarray
URL: https://leetcode.com/problems/maximum-subarray/

## Approach

### en
Solved through Kadane's algorithm.
Brute-force solution can not pass test-case.

### kr
Kadane's알고리즘으로 해결하였음.
Brute-force방법으로는 테스트케이스를 통과 할 수 없음.

## Solution
### JavaScript
*/

const maxSubArray = (nums) => {
  let sum = nums[0];
  let max = sum;
  
  for (let i = 1; i < nums.length; i += 1) {
    if ((sum + nums[i]) < nums[i]) {
      sum = nums[i];
    } else {
      sum += nums[i];
    }
    max = Math.max(sum, max);
  }
  
  return max;
};

// test
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

console.log(maxSubArray([1]));
// Input: nums = [1]
// Output: 1

console.log(maxSubArray([0]));
// Input: nums = [0]
// Output: 0

console.log(maxSubArray([-1]));
// Input: nums = [-1]
// Output: -1

console.log(maxSubArray([-10000]));
// Input: nums = [-100000]
// Output: -100000
