// https://leetcode.com/problems/remove-element/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Remove Element.
// Memory Usage: 36.1 MB, less than 100.00% of Java online submissions for Remove Element.

class Solution {
    public int removeElement(int[] nums, int val) {
        int [] tmps = new int [nums.length];

        int count  = 0;
        for (int i : nums) {
            if (i != val) {
                tmps[count++] = i;
            }
        }
        int count2 = 0;
        for (int i : tmps) {
            nums[count2++] = i;
        }

        return count;
    }
}