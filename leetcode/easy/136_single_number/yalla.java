// https://leetcode.com/problems/single-number/submissions/
// Runtime: 1 ms, faster than 96.29% of Java online submissions for Single Number.
// Memory Usage: 39.2 MB, less than 71.49% of Java online submissions for Single Number.
class Solution {
	public int singleNumber(int[] nums) {
		int ret = 0;
		for (int num : nums) {
			ret ^= num;
		}
		return ret;
	}
}