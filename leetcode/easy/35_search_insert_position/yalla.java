// https://leetcode.com/problems/search-insert-position
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Search Insert Position.
// Memory Usage: 39.2 MB, less than 100.00% of Java online submissions for Search Insert Position.
class Solution {
    public int searchInsert(int[] nums, int target) {
        if(nums == null) return 0;
        int start = 0;
        int end = nums.length -1;
        while(start <= end){
            int middle = (start + end) / 2;
            if(nums[middle] == target){
                return middle;
            }else if(nums[middle] < target){
                start = middle + 1;
            }else{
                end = middle - 1;
            }
        }
        return start;
    }
}