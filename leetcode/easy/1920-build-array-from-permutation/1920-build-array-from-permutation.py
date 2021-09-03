"""
1920-build-array-from-permutation
leetcode/easy/1920. Build Array from Permutation
Difficulty: easy
URL: https://leetcode.com/problems/build-array-from-permutation/
"""

class Solution:
    def buildArray(self, nums):
        return [nums[x] for x in nums]
