'''
https://leetcode.com/problems/arranging-coins/
Runtime: 1104 ms, faster than 32.76% of Python3 online submissions for Arranging Coins.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Arranging Coins.
'''


class Solution:
    def arrangeCoins(self, n: int) -> int:

        row = 1
        coins = 1
        
        while True:
            if coins == n:
                return row
            elif coins > n:
                return row - 1
            else:
                row += 1
                coins += row