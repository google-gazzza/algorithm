"""
https://leetcode.com/problems/plus-one/submissions/
Runtime: 36 ms, faster than 86.70% of Python3 online submissions for Plus One.
Memory Usage: 13.8 MB, less than 5.13% of Python3 online submissions for Plus One.
"""

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        digits = int(''.join(map(str, digits)))

        return [int(x) for x in str(digits + 1)]
