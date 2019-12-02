"""
https://leetcode.com/problems/majority-element/
Runtime: 176 ms, faster than 94.26% of Python3 online submissions for Majority Element.
Memory Usage: 14.1 MB, less than 100.00% of Python3 online submissions for Majority Element.
"""

from collections import Counter


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        return Counter(nums).most_common(1)[0][0]