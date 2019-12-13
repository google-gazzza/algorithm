"""
https://leetcode.com/problems/implement-strstr/submissions/
Runtime: 32 ms, faster than 85.91% of Python3 online submissions for Implement strStr().
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Implement strStr().
"""

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        
        len_ndl =  len(needle)
        
        if len_ndl == 0:
            return 0
        
        for i in range(len(haystack) - len_ndl + 1):
            for j in range(len_ndl):
                if haystack[i+j] != needle[j]:
                    break
                elif j == len_ndl - 1:
                    return i
                
        return -1
