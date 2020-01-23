"""
https://leetcode.com/problems/valid-palindrome/
Runtime: 48 ms, faster than 75.12% of Python3 online submissions for Valid Palindrome.
Memory Usage: 13.8 MB, less than 57.14% of Python3 online submissions for Valid Palindrome.
"""

class Solution:
    def isPalindrome(self, s: str) -> bool:
        stringList = []

        for character in s.lower():
            if character.isalnum():
                stringList.append(character)

        for i in range(int(len(stringList)/2)):
            if stringList[i] != stringList[-i-1]:
                return False

        return True
