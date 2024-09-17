// https://leetcode.com/problems/running-sum-of-1d-array/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Running Sum of 1d Array.
// Memory Usage: 38.8 MB, less than 87.23% of Java online submissions for Running Sum of 1d Array.
class Solution {
	//현재값은 이전값들의 합
	public int[] runningSum(int[] nums) {
		if(nums.length == 1) return nums;
		for (int i = 1; i < nums.length; i++) {
			nums[i] += nums[i-1];
		}
		return nums;
	}
}