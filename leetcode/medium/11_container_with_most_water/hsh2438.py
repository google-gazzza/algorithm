"""
https://leetcode.com/problems/container-with-most-water/
Runtime: 124 ms, faster than 97.78% of Python3 online submissions for Container With Most Water.
Memory Usage: 14.5 MB, less than 56.84% of Python3 online submissions for Container With Most Water.
"""


class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        max_water = 0
        
        while left < right:
            water = (right-left)*min(height[left], height[right])
            if water > max_water:
                max_water = water
            if height[left] < height[right]:
                left+=1
            else:
                right-=1
        
        return max_water
