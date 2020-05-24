# https://leetcode.com/problems/palindrome-partitioning
# Runtime: 80 ms, faster than 45.45% of Python online submissions for Palindrome Partitioning.
# Memory Usage: 13.2 MB, less than 35.29% of Python online submissions for Palindrome Partitioning.

class Solution:
    # @param s, a string
    # @return a list of lists of string
    # 1:30
    def partition(self, s):
        if not s:
            return []

        result = []
        self.checkPalindrome(s, result, [])

        return result

    def checkPalindrome(self, s, result, tmp):
        if not s:
            result.append(tmp[:])
            return

        for i in range(1, len(s)+1):
            if self.isPalindrome(s[:i]):
                tmp.append(s[:i])
                self.checkPalindrome(s[i:], result, tmp)
                tmp.pop()


    def isPalindrome(self, s):
        return s == s[::-1]


