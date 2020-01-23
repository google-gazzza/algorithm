// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 37.1 MB, less than 100.00% of Java online submissions for Two Sum II - Input array is sorted.

class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;

        while (left < right) {
            int sum = numbers[left] + numbers[right];
            if (sum == target) {
                return new int[]{left + 1, right + 1};
            }
            else if (sum < target) {
                left++;
            }
            else {
                right--;
            }
        }

        return null;
    }
}