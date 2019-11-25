"""
https://leetcode.com/problems/implement-strstr
Runtime: 16 ms, faster than 99.92% of Python3 online submissions for Implement strStr().
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Implement strStr().
"""
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle == '':
            return 0

        return haystack.find(needle)
