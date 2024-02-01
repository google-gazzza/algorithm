//https://leetcode.com/problems/container-with-most-water/
//Runtime: 2 ms, faster than 95.47% of Java online submissions for Container With Most Water.
//Memory Usage: 41.5 MB, less than 5.77% of Java online submissions for Container With Most Water.
class Solution {
    public int maxArea(int[] height) {
        int left = 0, right = height.length-1, max = 0;
        while (left < right) {
            max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return max;
    }
}