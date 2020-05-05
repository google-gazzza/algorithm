//https://leetcode.com/problems/house-robber
//Runtime: 0 ms, faster than 100.00% of Java online submissions for House Robber.
//Memory Usage: 36.7 MB, less than 5.26% of Java online submissions for House Robber.
class Solution {
    public int rob(int[] nums) {
        if(nums.length == 0) return 0;
        if(nums.length == 1) return nums[0];

        int[] tmp = new int[nums.length];
        tmp[0] = nums[0];
        tmp[1] = Math.max(nums[0], nums[1]);

        for(int i=2; i< nums.length; i++){
            tmp[i] = Math.max(tmp[i-1],tmp[i-2] + nums[i] );
        }
        return tmp[nums.length -1];
    }
}
