'''
https://leetcode.com/problems/guess-number-higher-or-lower/
Runtime: 20 ms, faster than 96.24% of Python3 online submissions for Guess Number Higher or Lower.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Guess Number Higher or Lower.
'''

# The guess API is already defined for you.
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        low = 1
        high = n
        
        while True:
            mid = (low + high) // 2
            res = guess(mid)
            
            if res == 0:
                return mid
            elif res == -1:
                high = mid
            elif res == 1:
                low = mid + 1
                