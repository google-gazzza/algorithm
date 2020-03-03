"""
https://leetcode.com/problems/ugly-number/
Runtime: 20 ms, faster than 99.30% of Python3 online submissions for Ugly Number.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Ugly Number.
"""


class Solution:
    def isUgly(self, num: int) -> bool:
        if num == 0:
            return False
        
        while num%2 == 0:
            num = num/2
        
        while num%3 == 0:
            num = num/3
        
        while num%5 == 0:
            num = num/5
        
        return num == 1
