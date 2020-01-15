"""
https://leetcode.com/problems/power-of-two/
Runtime: 24 ms, faster than 92.83% of Python3 online submissions for Power of Two.
Memory Usage: 12.5 MB, less than 100.00% of Python3 online submissions for Power of Two.
"""

class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n == 0:
            return False

        while True:
            if n == 1:
                return True

            elif n % 2 != 0:
                return False

            n = n // 2
