"""
https://leetcode.com/problems/reverse-integer/submissions/
Runtime: 28 ms, faster than 97.13% of Python3 online submissions for Reverse Integer.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Reverse Integer.
"""
class Solution:
    def reverse(self, x: int) -> int:

        strx = str(x)
        strx = strx[::-1]
        
        if strx[-1] == '-':
            strx = '-' + strx[:-1]

        val = int(strx)
        if abs(val) >= (2 ** 31):
            return 0
        
        return val

