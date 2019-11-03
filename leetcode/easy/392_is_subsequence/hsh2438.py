"""
https://leetcode.com/problems/is-subsequence
Runtime: 192 ms, faster than 45.54% of Python3 online submissions for Is Subsequence.
Memory Usage: 18.4 MB, less than 26.67% of Python3 online submissions for Is Subsequence.
"""
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) == 0:
            return True

        check = [0] * len(s)
        i = 0

        for char in t:
            if char == s[i]:
                check[i] = i + 1
                i += 1
            if i == len(s):
                break

        return True if check[-1] == len(s) else False
