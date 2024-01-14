class Solution {
    public int minPairSum(int[] nums) {
        Arrays.sort(nums);
        int answer = 0;
        for(int i=0;i<nums.length/2;i++){
            answer = Math.max(answer,nums[i]+nums[nums.length-1-i]);
        }
        return answer;
    }
}