"""https://leetcode.com/problems/power-of-three/

Runtime: 88 ms, faster than 71.89% of Python3 online submissions for Power of Three.
Memory Usage: 14.1 MB, less than 7.41% of Python3 online submissions for Power of Three.
"""
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        # 3^19 = 1162261467 is the largest power of 3 number fits in a 32 bit integer
        return n > 0 and 1162261467 % n == 0
