"""
https://leetcode.com/problems/length-of-last-word/submissions/
Runtime: 24 ms, faster than 94.43% of Python3 online submissions for Length of Last Word.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Length of Last Word.
"""

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        lst = list(filter(None, s.split(' ')))

        if not lst:
            return 0

        return(len(lst[-1]))
