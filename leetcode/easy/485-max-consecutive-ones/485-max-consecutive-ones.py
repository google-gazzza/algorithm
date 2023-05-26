"""
485-max-consecutive-ones
leetcode/easy/485. Max Consecutive Ones
Difficulty:  easy
URL: https://leetcode.com/problems/max-consecutive-ones/
"""

class Solution:
    def findMaxConsecutiveOnes(self, nums):
        max_count = 0
        count = 0

        for i in range(0, len(nums)):
            if nums[i] == 1:
                count += 1
            else:
                max_count = max(max_count, count)
                count = 0

        if nums[-1] == 1:
            max_count = max(max_count, count)

        return max_count

