// https://leetcode.com/problems/rotate-array
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Rotate Array.
// Memory Usage: 42.1 MB, less than 5.77% of Java online submissions for Rotate Array.
class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        reverse(nums, 0 ,nums.length -1);
        reverse(nums, 0, k -1);
        reverse(nums, k, nums.length -1);
    }

    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int tmp = nums[start];
            nums[start] = nums[end];
            nums[end] = tmp;
            start++;
            end--;
        }
    }
}