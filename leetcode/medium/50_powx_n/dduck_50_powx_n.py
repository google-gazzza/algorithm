# https://leetcode.com/problems/powx-n/

# Runtime: 32 ms, faster than 32.89% of Python3 online submissions for Pow(x, n).
# Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Pow(x, n).
# Runtime: 28 ms, faster than 67.65% of Python3 online submissions for Pow(x, n).
# Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Pow(x, n)


from unittest import TestCase

class Solution:
    def myPow(self, x: float, n: int) -> float:
        return round(x ** n, 5)


TestCase().assertEqual(Solution().myPow(2.00000, 10), 1024.00000)
# Input: 2.00000, 10
# Output: 1024.00000

