"""
https://leetcode.com/problems/longest-palindromic-substring/
Runtime: 824 ms, faster than 87.68% of Python3 online submissions for Longest Palindromic Substring.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Longest Palindromic Substring.
"""


class Solution:
    def longestPalindrome(self, s: str) -> str:
        len_s = len(s)
        if len_s == 1:
            return s

        def search(left, right):
            while True:
                if left == -1 or right == len_s or s[left] != s[right]:
                    break
                left -= 1
                right += 1
            return left, right

        def update(left, right, maximum, result):
            left, right = search(left, right)
            length = right - left - 1
            if length > maximum:
                return length, s[left + 1:right]
            else:
                return maximum, result

        maximum = 0
        result = ''

        for i in range(0, len(s)):
            maximum, result = update(i, i+1, maximum, result)
            if i != 0:
                maximum, result = update(i-1, i+1, maximum, result)

        return result
