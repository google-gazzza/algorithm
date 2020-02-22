// https://leetcode.com/problems/majority-element/
// Runtime: 1 ms, faster than 99.84% of Java online submissions for Majority Element.
// Memory Usage: 41.6 MB, less than 71.32% of Java online submissions for Majority Element.

class Solution {
    public int majorityElement(int[] nums) {
        Arrays.sort(nums);
        return nums[nums.length / 2];
    }
}