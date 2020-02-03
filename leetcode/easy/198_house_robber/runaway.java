// https://leetcode.com/problems/house-robber/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for House Robber.
// Memory Usage: 36.5 MB, less than 5.26% of Java online submissions for House Robber.

class Solution {
    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        else if (nums.length == 1) return nums[0];
        
        int[] sums = new int[nums.length];
        sums[0] = nums[0];
        sums[1] = Math.max(nums[0], nums[1]);
        for (int i = 2; i < sums.length; i++) {
            sums[i] = Math.max(sums[i - 2] + nums[i], sums[i - 1]);
        }
        return sums[sums.length - 1];
    }
}