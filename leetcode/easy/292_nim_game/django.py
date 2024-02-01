'''
https://leetcode.com/problems/nim-game/
Runtime: 28 ms, faster than 59.15% of Python3 online submissions for Nim Game.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Nim Game.
'''

class Solution:
    def canWinNim(self, n: int) -> bool:
        if n % 4 == 0:
            return False
        
        else:
            return True
        