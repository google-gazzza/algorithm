"""
https://leetcode.com/problems/reverse-words-in-a-string-iii/
Runtime: 28 ms, faster than 91.81% of Python3 online submissions for Reverse Words in a String III.
Memory Usage: 14.5 MB, less than 7.69% of Python3 online submissions for Reverse Words in a String III.
"""


class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join([words[::-1] for words in s.split()])
        
