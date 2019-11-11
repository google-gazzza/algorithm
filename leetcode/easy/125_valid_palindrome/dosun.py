"""https://leetcode.com/problems/valid-palindrome/

Runtime: 36 ms, faster than 99.38% of Python3 online submissions for Valid Palindrome.
Memory Usage: 14.1 MB, less than 50.00% of Python3 online submissions for Valid Palindrome.
"""
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = ''.join(c for c in s.lower() if c.isalnum())
        return s == s[::-1]
