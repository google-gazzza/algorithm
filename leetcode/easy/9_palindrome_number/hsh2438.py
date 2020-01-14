"""
https://leetcode.com/problems/palindrome-number/
Runtime: 52 ms, faster than 86.20% of Python3 online submissions for Palindrome Number.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Palindrome Number.
"""


class Solution:
    def isPalindrome(self, x: int) -> bool:
        return str(x) == str(x)[::-1]
