"""
389-find-the-difference
leetcode/easy/389. Find the Difference
Difficulty: easy
URL: https://leetcode.com/problems/find-the-difference/
"""

class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        left = list(s)
        left_copy = list(s)
        right = list(t)
        right_copy = list(t)

        for x in left_copy:
            if x in right:
                left.remove(x)
                right.remove(x)

        for x in right_copy:
            if x in left:
                left.remove(x)
                right.remove(x)

        left.append(*right)
        return ''.join(left)