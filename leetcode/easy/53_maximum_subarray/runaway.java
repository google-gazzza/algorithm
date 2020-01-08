// https://leetcode.com/problems/maximum-subarray/
// Runtime: 1 ms, faster than 83.51% of Java online submissions for Maximum Subarray.
// Memory Usage: 37.6 MB, less than 99.53% of Java online submissions for Maximum Subarray.

class Solution {
    public int maxSubArray(int[] nums) {
        int sum = 0;
        int max = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            if (sum < 0) sum = 0;
            sum += nums[i];
            max = Math.max(max, sum);
        }
        return max;
    }
}