"""
https://leetcode.com/problems/reverse-string-ii/
Runtime: 36 ms, faster than 27.02% of Python3 online submissions for Reverse String II.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Reverse String II.
"""


class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        
        result = ''
        for i in range(int(len(s) / k)):
            temp = s[i*k:(i+1)*k]
            if i % 2 == 0:
                result += temp[::-1]
            else:
                result += temp

        remain = s[len(result):]
        if int(len(s) / k) % 2 == 1:
            result += remain
        else:
            result += remain[::-1]
            
        return result
