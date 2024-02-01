'''
https://leetcode.com/problems/valid-perfect-square/
Runtime: 36 ms, faster than 28.37% of Python3 online submissions for Valid Perfect Square.
Memory Usage: 12.5 MB, less than 100.00% of Python3 online submissions for Valid Perfect Square.
'''


class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        i = 1
        while True:
            isq = i * i
            
            if isq == num:
                return True
            elif isq > num:
                return False
            else:
                i += 1
                continue
            
        