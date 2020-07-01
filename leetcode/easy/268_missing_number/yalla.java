// https://leetcode.com/problems/missing-number/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Missing Number.
// Memory Usage: 39.9 MB, less than 78.77% of Java online submissions for Missing Number.
class Solution {
    public int missingNumber(int[] nums) {
        int totalSum = (nums.length * (nums.length + 1) ) / 2;
        int diff = 0;
        for(int num : nums) diff += num;
        return totalSum - diff;
    }
}