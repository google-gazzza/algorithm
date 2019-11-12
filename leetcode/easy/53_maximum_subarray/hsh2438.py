"""
https://leetcode.com/problems/maximum-subarray
Runtime: 80 ms, faster than 53.49% of Python3 online submissions for Maximum Subarray.
Memory Usage: 14.7 MB, less than 5.69% of Python3 online submissions for Maximum Subarray.
"""

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        local_maximum = float('-inf')
        global_maximum = float('-inf')

        for num in nums:
            local_maximum = max(num, num + local_maximum)
            global_maximum = max(global_maximum, local_maximum)

        return global_maximum
