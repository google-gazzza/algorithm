"""
https://leetcode.com/problems/split-a-string-in-balanced-strings/
Runtime: 28 ms, faster than 67.64% of Python3 online submissions for Split a String in Balanced Strings.
Memory Usage: 13.8 MB, less than 100.00% of Python3 online submissions for Split a String in Balanced Strings.
"""


class Solution:
    def balancedStringSplit(self, s: str) -> int:
        
        result = 0
        
        cnt_l = 0
        cnt_r = 0
        
        for ch in s:
            
            if ch == 'L':
                cnt_l += 1
            else:
                cnt_r += 1
            
            if cnt_l == cnt_r:
                result += 1
                cnt_l = cnt_r = 0
        
        return result
            
