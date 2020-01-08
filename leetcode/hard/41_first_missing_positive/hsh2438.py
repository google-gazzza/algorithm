"""
https://leetcode.com/problems/first-missing-positive/
Runtime: 32 ms, faster than 92.92% of Python3 online submissions for First Missing Positive.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for First Missing Positive.
"""


class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        if nums == []:
            return 1
        
        max_num = max(nums)
        if max_num < 1:
            return 1
        
        for i in range(1, max_num+1):
            if not i in nums:
                return i
        return max_num+1
