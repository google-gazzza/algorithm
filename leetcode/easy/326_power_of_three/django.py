'''
https://leetcode.com/problems/power-of-three/
Runtime: 64 ms, faster than 92.72% of Python3 online submissions for Power of Three.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Power of Three.
'''

powers = [pow(3,x) for x in range(20)]

class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n in powers:
            return True
        return False