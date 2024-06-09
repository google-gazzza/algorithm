# 2932-maximum-strong-pair-xor-i
# URL: https://leetcode.com/problems/maximum-strong-pair-xor-i/description/
from typing import List


class Solution:
    def maximumStrongPairXor(self, nums: List[int]) -> int:
        maxXor = 0

        for i in range(len(nums)):
            for j in range(len(nums)):
                if abs(nums[i] - nums[j]) <= min(nums[i], nums[j]):
                    if nums[i] ^ nums[j] > maxXor:
                        maxXor = nums[i] ^ nums[j]

        return maxXor
