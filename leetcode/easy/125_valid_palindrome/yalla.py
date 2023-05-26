"""
https://leetcode.com/problems/valid-palindrome/submissions/
Runtime: 40 ms, faster than 97.00% of Python3 online submissions for Valid Palindrome.
Memory Usage: 15.6 MB, less than 17.75% of Python3 online submissions for Valid Palindrome.
"""
class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()

        temp = []

        for char in s:
            if char.isalnum():
                temp.append(char)

        if temp == temp[::-1]:
            return True
        else:
            return False
