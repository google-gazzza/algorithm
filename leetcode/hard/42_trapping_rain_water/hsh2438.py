"""
https://leetcode.com/problems/trapping-rain-water/
Runtime: 2144 ms, faster than 5.00% of Python3 online submissions for Trapping Rain Water.
Memory Usage: 13.3 MB, less than 97.67% of Python3 online submissions for Trapping Rain Water.
"""


class Solution:
    def trap(self, heights: List[int]) -> int:

        if heights == []:
            return 0

        max_height = max(heights)

        results = max_height * len(heights)

        for i in range(max_height, 0, -1):
            for height in heights:
                if height < i:
                    results -= 1
                else:
                    break
            for height in heights[::-1]:
                if height < i:
                    results -= 1
                else:
                    break

        return results - sum(heights)
