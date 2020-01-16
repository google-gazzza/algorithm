//https://leetcode.com/problems/array-partition-i/submissions/
//Runtime: 16 ms, faster than 11.10% of Java online submissions for Array Partition I.
//Memory Usage: 52.5 MB, less than 7.14% of Java online submissions for Array Partition I.

class Solution {
    public int arrayPairSum(int[] nums) {
        int result = 0;
		Arrays.sort(nums);
		for(int i=0; i<nums.length-1; i+=2) {
			result+= Math.min(nums[i], nums[i+1]);
		}
		return result;
    }
}
