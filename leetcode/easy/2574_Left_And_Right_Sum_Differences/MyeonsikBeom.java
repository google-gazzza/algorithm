/**
 https://leetcode.com/problems/left-and-right-sum-differences/
 Runtime : 2ms
 Memory: 43.7MB
 */
class Solution {
    public int[] leftRightDifference(int[] nums) {
        int len = nums.length;
        int[] leftSum = new int[len];
        int[] rightSum = new int[len];
        int[] answer = new int[len];
        for(int i=0;i<len;i++){
            if(i==0){
                leftSum[i]=0;
                rightSum[len-i-1]=0;
            }else{
                leftSum[i] = leftSum[i-1] + nums[i-1];
                rightSum[len-i-1] = rightSum[len-i] + nums[len-i];
            }

        }
        for(int i=0;i<len;i++){
            answer[i] = Math.abs(leftSum[i]-rightSum[i]);
        }
        return answer;
    }
}