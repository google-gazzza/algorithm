// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
// Runtime: 1 ms, faster than 97.66% of Java online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 40.9 MB, less than 53.19% of Java online submissions for Remove Duplicates from Sorted Array.

class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length == 0) return 0;
        int i = 0;
        for(int j=1; j< nums.length; j++){
            if(nums[j] != nums[i]){
                i++;
                nums[i] = nums[j];
            }
        }
        return i+1;
    }
}