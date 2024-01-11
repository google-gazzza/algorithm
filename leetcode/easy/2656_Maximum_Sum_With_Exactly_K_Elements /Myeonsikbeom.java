/**https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/ */
class Solution {
    public int maximizeSum(int[] nums, int k) {
        Arrays.sort(nums);
        int answer = 0;
        for(int i=0;i<k;i++){
            answer+= nums[nums.length-1] + i;
        }
        return answer;
    }
}