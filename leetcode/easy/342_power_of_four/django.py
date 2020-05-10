'''
https://leetcode.com/problems/power-of-four/
Runtime: 24 ms, faster than 92.75% of Python3 online submissions for Power of Four.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Power of Four.
'''

powers = [pow(4,x) for x in range(16) ]

class Solution:
    def isPowerOfFour(self, num: int) -> bool:
        return num in powers
        