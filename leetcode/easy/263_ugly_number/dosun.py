"""https://leetcode.com/problems/ugly-number/

Runtime: 24 ms, faster than 96.34% of Python3 online submissions for Ugly Number.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Ugly Number.
"""
class Solution:
    def isUgly(self, num: int) -> bool:
        if num == 0: return False
        denominators = [2, 3, 5]
        for denominator in denominators:
            while num % denominator == 0:
                num /= denominator
        return True if num == 1 else False
