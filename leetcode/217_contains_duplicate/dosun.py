"""https://leetcode.com/problems/contains-duplicate/

Runtime: 144 ms, faster than 63.68% of Python3 online submissions for Contains Duplicate.
Memory Usage: 19.4 MB, less than 15.09% of Python3 online submissions for Contains Duplicate.
"""

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return not len(set(nums)) == len(nums)
