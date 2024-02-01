// https://leetcode.com/problems/majority-element/
// Runtime: 1 ms, faster than 99.87% of Java online submissions for Majority Element.
// Memory Usage: 42.9 MB, less than 37.50% of Java online submissions for Majority Element.

class Solution {
    public int majorityElement(int[] nums) {
        int ret = 0;
        int cnt = 0;
        for(int num:nums){
            if(cnt==0){
                ret=num;
                cnt++;
            }else if (ret==num){
                cnt++;
            }else{
                cnt--;
            }
        }
        return ret;
    }
}