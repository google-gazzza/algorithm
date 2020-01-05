"""https://leetcode.com/problems/longest-substring-without-repeating-characters/

Runtime: 60 ms, faster than 78.44% of Python3 online submissions for Longest Substring Without Repeating Characters.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Longest Substring Without Repeating Characters.
"""
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        start, result, seen = 0, 0, {}
        for i, c in enumerate(s):
            if c in seen:
                start = max(start, seen[c] + 1)
            seen[c] = i
            result = max(result, i - start + 1)

        return result
