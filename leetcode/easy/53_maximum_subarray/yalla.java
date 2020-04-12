//https://leetcode.com/problems/maximum-subarray/submissions/
//Runtime: 1 ms, faster than 69.65% of Java online submissions for Maximum Subarray.
//Memory Usage: 41.5 MB, less than 5.16% of Java online submissions for Maximum Subarray.
class Solution {
    public int maxSubArray(int[] nums) {
        if(nums.length == 0) return 0;
        int[] tmpArray = new int[nums.length];
        tmpArray[0] = nums[0];

        for(int i = 1; i < nums.length; i++){
            tmpArray[i] = Math.max(tmpArray[i-1] + nums[i] ,nums[i]);
        }
        int result = tmpArray[0];
        for(int num : tmpArray){
            if(num > result) result = num;
        }
        return result;
    }
}