# Definition for singly-linked list.
from typing import List


class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        return len(nums) - sum(1 for x in nums if x >= k)

