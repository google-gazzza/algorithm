'''
https://leetcode.com/problems/reverse-string/
Runtime: 208 ms, faster than 85.58% of Python3 online submissions for Reverse String.
Memory Usage: 17.1 MB, less than 100.00% of Python3 online submissions for Reverse String.
'''

class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        
        half = len(s) // 2
        
        for i in range(half):
            s[i], s[-1-i] = s[-1-i], s[i]
            