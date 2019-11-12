"""
https://leetcode.com/problems/find-the-duplicate-number/
Runtime: 56 ms, faster than 99.88% of Python3 online submissions for Find the Duplicate Number.
Memory Usage: 15.9 MB, less than 7.14% of Python3 online submissions for Find the Duplicate Number.
"""


from collections import Counter


class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        return Counter(nums).most_common(1)[0][0]
