// https://leetcode.com/problems/non-decreasing-array/submissions/
// Runtime: 1 ms, faster than 74.58% of Java online submissions for Non-decreasing Array.
// Memory Usage: 40.7 MB, less than 90.48% of Java online submissions for Non-decreasing Array.
class Solution {
    
    public boolean checkPossibility(int[] nums) {
        
        int updateCount = 0;
        int beforeInt = 0;
        for(int i=0;i<nums.length-1;i++){

            if(nums[i]>nums[i+1]){

                if(beforeInt > nums[i+1]){
                    nums[i+1] = nums[i];
                }else{
                    nums[i] = nums[i+1];
                }
                updateCount++;
            }
            
           if(updateCount > 2)
                break;

            beforeInt = nums[i];
        }
        
        return updateCount < 2;
    }
}