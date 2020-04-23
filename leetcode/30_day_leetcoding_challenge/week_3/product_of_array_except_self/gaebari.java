//https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/530/week-3/3300/
//Runtime: 1871 ms
//Memory Usage: 47.8 MB
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] result = new int[nums.length];
        for(int i = 0; i < nums.length; i++) {
            int multiply = 1;
            for(int j = 0; j < nums.length; j++) {
                if ( i == j ) continue;
                multiply *= nums[j];
            }
            result[i] = multiply;
        }
        return result;
    }
}