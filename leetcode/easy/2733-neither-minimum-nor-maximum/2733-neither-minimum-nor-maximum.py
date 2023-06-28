# leetcode/easy/2733. Neither Minimum nor Maximum
# 2733-neither-minimum-nor-maximum
# URL: https://leetcode.com/problems/neither-minimum-nor-maximum/description/

# codewars/4kyu/Most frequently used words in a text
# most-frequently-used-words-in-a-text
# URL: https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/python
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

from typing import List


class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        min_val = min(nums)
        max_val = max(nums)

        for n in nums:
            if n != min_val and n != max_val:
                return n

        return -1
