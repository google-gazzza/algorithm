// https://leetcode.com/problems/array-partition-i/
// Runtime: 10 ms, faster than 96.88% of Java online submissions for Array Partition I.
// Memory Usage: 41.2 MB, less than 54.20% of Java online submissions for Array Partition I.
class Solution {
	public int arrayPairSum(int[] nums) {
		Arrays.sort(nums);
		int result = 0;
		for (int i = 0; i < nums.length; i+=2) {
			result += nums[i];
		}
		return result;
	}
}