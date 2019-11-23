"""https://leetcode.com/problems/longest-palindrome/

Runtime: 8 ms, faster than 99.86% of Python online submissions for Longest Palindrome.
Memory Usage: 11.9 MB, less than 12.50% of Python online submissions for Longest Palindrome.
"""
import collections

class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: int
        """
        a = collections.Counter(s)
        result = 0
        odd = False
        for k, v in a.items():
            if v % 2 == 0: 
                result += v
            else:
                result += (v / 2) * 2
                odd = True
        if odd: result += 1
            
        return result 
