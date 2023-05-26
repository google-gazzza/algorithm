"""
https://leetcode.com/problems/reverse-string/submissions/
Runtime: 255 ms, faster than 54.17% of Python3 online submissions for Reverse String.
Memory Usage: 18.4 MB, less than 46.96% of Python3 online submissions for Reverse String.
"""
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        left = 0
        right = len(s) - 1

        while left < right:
            s[left], s[right] = s[right], s[left]

            left += 1
            right -= 1
