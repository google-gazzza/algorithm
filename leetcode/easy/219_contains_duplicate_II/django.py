"""
https://leetcode.com/problems/contains-duplicate-ii/
Runtime: 100 ms, faster than 42.46% of Python3 online submissions for Contains Duplicate II.
Memory Usage: 20.4 MB, less than 62.50% of Python3 online submissions for Contains Duplicate II.
"""

class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        dic = {}

        for i, v in enumerate(nums):
            if v in dic and i - dic[v] <= k:
                return True
            dic[v] = i

        return False


