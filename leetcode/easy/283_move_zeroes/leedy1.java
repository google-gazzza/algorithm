//https://leetcode.com/problems/move-zeroes
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Move Zeroes.
//Memory Usage: 39.8 MB, less than 10.49% of Java online submissions for Move Zeroes.

class Solution {
    public void moveZeroes(int[] nums) {
        int zeroCount = 0;
        for(int num : nums){
            if(num == 0) zeroCount++;
        }
        int index = 0;
        for(int i = 0; i < nums.length ; i++){
            if(nums[i] != 0 ){
                nums[index] = nums[i];
                index++;
            }
        }
        for(int i = nums.length-1; i > nums.length-1-zeroCount; i--){
            nums[i] = 0;
        }
    }
}
