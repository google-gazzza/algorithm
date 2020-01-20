// https://leetcode.com/problems/remove-element/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Remove Element.
// Memory Usage: 36.7 MB, less than 100.00% of Java online submissions for Remove Element.

class Solution {
    public int removeElement(int[] nums, int val) {
        int result = 0;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] != val){
                nums[result] = nums[i];
                result++;
            }
        }
        return result;
    }
}
