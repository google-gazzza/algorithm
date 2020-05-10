"""
https://leetcode.com/problems/rotate-string/
Runtime: 44 ms, faster than 6.54% of Python3 online submissions for Rotate String.
Memory Usage: 13.8 MB, less than 5.26% of Python3 online submissions for Rotate String.
"""


class Solution:
    def rotateString(self, A: str, B: str) -> bool:
        
        for i in range(len(B)+1):
            if B[i:] + B[:i] == A:
                return True
        
        return False
