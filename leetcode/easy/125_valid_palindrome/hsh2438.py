"""
https://leetcode.com/problems/valid-palindrome/
Runtime: 48 ms, faster than 84.35% of Python3 online submissions for Valid Palindrome.
Memory Usage: 14.4 MB, less than 33.33% of Python3 online submissions for Valid Palindrome.
"""


class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        
        preprocessed = []
        
        for c in s:
            if c >= 'a' and c <= 'z':
                preprocessed.append(c)
            if c >= '0' and c <= '9':
                preprocessed.append(c)
        
        if preprocessed == preprocessed[::-1]:
            return True
        else:
            return False
