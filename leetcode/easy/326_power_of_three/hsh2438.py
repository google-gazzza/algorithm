"""
https://leetcode.com/problems/power-of-three/
Runtime: 76 ms, faster than 63.81% of Python3 online submissions for Power of Three.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Power of Three.
"""


class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        return True if n > 0 and pow(3, 19)%n == 0 else False
