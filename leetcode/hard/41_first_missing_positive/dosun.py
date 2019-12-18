"""https://leetcode.com/problems/first-missing-positive/

Runtime: 28 ms, faster than 98.26% of Python3 online submissions for First Missing Positive.
Memory Usage: 12.5 MB, less than 100.00% of Python3 online submissions for First Missing Positive.
"""
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        result = 1
        while True:
            if result not in nums: return result
            else: result += 1
