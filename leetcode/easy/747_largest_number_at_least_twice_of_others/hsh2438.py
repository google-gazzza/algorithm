"""
https://leetcode.com/problems/largest-number-at-least-twice-of-others/
Runtime: 28 ms, faster than 95.08% of Python3 online submissions for Largest Number At Least Twice of Others.
Memory Usage: 14.1 MB, less than 20.00% of Python3 online submissions for Largest Number At Least Twice of Others.
"""


class Solution:
    def dominantIndex(self, nums: List[int]) -> int:
        idx = -1
        max_num = second_num = float(-inf)
        for i, num in enumerate(nums):
            if num > max_num:
                second_num = max_num
                max_num = num
                idx = i
            elif num > second_num:
                second_num = num
        
        if max_num >= second_num*2:
            return idx
        return -1
