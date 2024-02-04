"""
https://leetcode.com/problems/single-number-iii/
Runtime: 88 ms, faster than 19.26% of Python3 online submissions for Single Number III.
Memory Usage: 16.5 MB, less than 50.00% of Python3 online submissions for Single Number III.
"""


from collections import Counter


class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        return (Counter(nums) - (Counter(nums) - Counter(list(set(nums))))  - (Counter(nums) - Counter(list(set(nums))))).keys()
