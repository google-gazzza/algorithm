"""
https://leetcode.com/problems/find-all-duplicates-in-an-array/
Runtime: 396 ms, faster than 53.30% of Python3 online submissions for Find All Duplicates in an Array.
Memory Usage: 23.1 MB, less than 7.14% of Python3 online submissions for Find All Duplicates in an Array.
"""


from collections import Counter


class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        return [key for key, value in Counter(nums).most_common() if value > 1]
