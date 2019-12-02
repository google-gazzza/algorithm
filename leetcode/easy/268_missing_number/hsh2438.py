"""
https://leetcode.com/problems/missing-number/
Runtime: 148 ms, faster than 84.17% of Python3 online submissions for Missing Number.
Memory Usage: 13.9 MB, less than 96.77% of Python3 online submissions for Missing Number.
"""


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        if nums == []:
            return 0

        nums.sort()
        for i in range(len(nums)):
            if i != nums[i]:
                return i

        return nums[-1] + 1
