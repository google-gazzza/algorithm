//https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Find First and Last Position of Element in Sorted Array.
//Memory Usage: 42.5 MB, less than 100.00% of Java online submissions for Find First and Last Position of Element in Sorted Array.

class Solution {
    public int[] searchRange(int[] nums, int target) {
        double l = target - 0.5, r = target + 0.5;
        int rl = bs(nums, l), rr = bs(nums, r);
        if ( rl == rr) return new int[] {-1, -1};
        return new int[]{rl, rr-1 };
    }

    private int bs( int[] nums, double target) {
        int start = 0, high = nums.length -1;
        while (start <= high) {
            int m = start + (high - start) / 2;
            if ( target > nums[m] )  start = m+1;
            else high = m-1;
        }
        return start;
    }
}