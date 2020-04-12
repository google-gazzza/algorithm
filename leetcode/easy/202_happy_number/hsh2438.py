"""
https://leetcode.com/problems/happy-number/
Runtime: 24 ms, faster than 97.06% of Python3 online submissions for Happy Number.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Happy Number.
"""


class Solution:
    def isHappy(self, n: int) -> bool:
        
        log = []
        new_num = 0
    
        while True:
            while n > 0:
                temp = n%10
                new_num += temp*temp
                n = int(n/10)
            if new_num == 1:
                return True
            if new_num in log:
                return False
            log.append(new_num)
            n = new_num
            new_num = 0
