// 3110-score-of-a-string
// URL: https://leetcode.com/problems/score-of-a-string/description/

// # NOTE: top python solution of leetcode + modified by me
function longestMonotonicSubarray(nums: number[]): number {
    let maxConsecutiveCount = 1;
    let increasingConesecutiveCount = 1;
    let decreasingConsecutiveCount = 1;
  
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        increasingConesecutiveCount += 1;
        decreasingConsecutiveCount = 1;
      } else if (nums[i] > nums[i + 1]) {
        decreasingConsecutiveCount += 1;
        increasingConesecutiveCount = 1;
      } else {
        increasingConesecutiveCount = 1;
        decreasingConsecutiveCount = 1;
      }
  
      maxConsecutiveCount = Math.max(
        maxConsecutiveCount,
        increasingConesecutiveCount,
        decreasingConsecutiveCount,
      );
    }
  
    return maxConsecutiveCount;
  }
  
  
  // NOTE: naive O(2n)
  // function getLongestMonotonicSubarrayLength(nums: number[]): number {
  //   let max = 0;
  //   let current = 0;
  //   let prev = nums[0];
  //
  //   for (let i = 1; i < nums.length; i++) {
  //     if (nums[i] > prev) {
  //       current++;
  //     } else {
  //       max = Math.max(max, current);
  //       current = 0;
  //     }
  //     prev = nums[i];
  //   }
  //
  //   return Math.max(max, current) + 1;
  // }
  //
  // function longestMonotonicSubarray(nums: number[]): number {
  //   return Math.max(
  //     getLongestMonotonicSubarrayLength(nums),
  //     getLongestMonotonicSubarrayLength(nums.reverse())
  //   );
  // };
  