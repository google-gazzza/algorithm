"""
326-power-of-three
leetcode/easy/326. Power of Three
Difficulty: easy
URL: https://leetcode.com/problems/power-of-three/
"""


class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        while n > 2:
            n /= 3

        return n == 