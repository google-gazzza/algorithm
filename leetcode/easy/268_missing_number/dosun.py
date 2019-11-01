"""https://leetcode.com/problems/missing-number/

Runtime: 144 ms, faster than 98.66% of Python3 online submissions for Missing Number.
Memory Usage: 15.2 MB, less than 6.45% of Python3 online submissions for Missing Number.
"""

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums_len = len(nums)
        return (nums_len * (nums_len + 1)) // 2 - sum(nums)
