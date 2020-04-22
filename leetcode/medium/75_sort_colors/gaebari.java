//https://leetcode.com/problems/sort-colors
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Sort Colors.
//Memory Usage: 38.2 MB, less than 5.51% of Java online submissions for Sort Colors.
class Solution {
    public void sortColors(int[] nums) {
        if ( nums == null || nums.length < 2) return;
        int low = 0, high = nums.length - 1, i = 0;
        while( i <= high ) {
            if( nums[i] == 0 ) {
                int tmp = nums[i];
                nums[i] = nums[low];
                nums[low] = tmp;
                low++; i++;
            } else if (nums[i] == 2) {
                int tmp = nums[i];
                nums[i] = nums[high];
                nums[high] = tmp;
                high--;
            } else {
                i++;
            }
        }
    }
}