"""
https://leetcode.com/problems/longest-palindrome/
Runtime: 32 ms, faster than 53.51% of Python3 online submissions for Longest Palindrome.
Memory Usage: 13.8 MB, less than 8.33% of Python3 online submissions for Longest Palindrome.
"""


from collections import Counter


class Solution:
    def longestPalindrome(self, s: str) -> int:
        result = 0
        
        counter = Counter(s)
        
        for value in counter.values():
            if value % 2:
                result += value - 1
            else:
                result += value
        
        if result < len(s):
            result += 1
        
        return result
        
