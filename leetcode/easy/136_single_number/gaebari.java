// https://leetcode.com/problems/single-number
// Runtime: 149 ms, faster than 5.04% of Java online submissions for Single Number.
// Memory Usage: 38.8 MB, less than 98.52% of Java online submissions for Single Number.
class Solution {
    public int singleNumber(int[] nums) {
        int result = -1;
        for(int i = 0; i < nums.length; i++)   {
            result = nums[i];
            for(int j = 0; j <nums.length; j++ ) {
                if (i == j) continue;
                if (nums[i] == nums[j]) {
                    result = -1;
                    break;
                }

            }
            if (result != -1) {
                break;
            }
        }
        return result;
    }
}