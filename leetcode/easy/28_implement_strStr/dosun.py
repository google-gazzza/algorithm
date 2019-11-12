"""https://leetcode.com/problems/implement-strstr/

Runtime: 24 ms, faster than 99.90% of Python3 online submissions for Implement strStr().
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Implement strStr().
"""
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return haystack.index(needle) if needle in haystack else -1
