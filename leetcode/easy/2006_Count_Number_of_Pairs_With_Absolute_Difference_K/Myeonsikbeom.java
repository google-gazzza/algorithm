/**
 https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
 runtime: 8ms,
 memory:43.03mb
 */
class Solution {
    public int countKDifference(int[] nums, int k) {
        int answer = 0;
        int start = 0;
        int len = nums.length;
        while(start != len){
            for(int i=0;i<len;i++){
                if(i>start && Math.abs(nums[start] - nums[i]) == k){
                    answer++;
                }
            }
            start++;
        }
        return answer;
    }
}