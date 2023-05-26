"""
1725-number-of-rectangles-that-can-form-the-largest-square
leetcode/easy/1725. Number Of Rectangles That Can Form The Largest Square
URL: https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
"""
from typing import List


class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        max_value = 0
        count = 0

        for rectangle in rectangles:
            min_value = min(rectangle)
            if min_value > max_value:
                max_value = min_value
                count = 1
            elif min_value == max_value:
                count += 1

        return count


def test():
    rectangles = [[5, 8], [3, 9], [5, 12], [16, 5]]
    output = 3
    assert Solution().countGoodRectangles(rectangles) == output

    rectangles = [[2, 3], [3, 7], [4, 3], [3, 7]]
    output = 3
    assert Solution().countGoodRectangles(rectangles) == output
