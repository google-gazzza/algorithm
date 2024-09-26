"""
42-trapping-rain-water
leetcode/hard/42. Trapping Rain Water
Difficulty: hard
URL: https://leetcode.com/problems/trapping-rain-water/
"""

from typing import List


class Solution:
    def trap(self, height: List[int]) -> int:
        water_volume = 0
        left_max = height[0]
        right_max = max(height)

        for index, val in enumerate(height):
            net_trap_volume = min(left_max, right_max) - val

            if net_trap_volume > 0:
                water_volume += net_trap_volume

            if left_max < val:
                left_max = val

            if right_max == val:
                right_max = max([0, *height[index + 2:]])

        return water_volume


def test():
    height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    output = 6
    assert Solution().trap(height) == output

    height = [4, 2, 0, 3, 2, 5]
    output = 9
    assert Solution().trap(height) == output

    height = [4, 2, 3]
    output = 1
    assert Solution().trap(height) == output

    height = [6, 4, 2, 0, 3, 2, 0, 3, 1, 4, 5, 3, 2, 7, 5, 3, 0, 1, 2, 1, 3, 4, 6, 8, 1, 3]
    output = 83
    assert Solution().trap(height) == output
