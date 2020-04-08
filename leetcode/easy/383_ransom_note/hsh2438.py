"""
https://leetcode.com/problems/ransom-note/
Runtime: 40 ms, faster than 84.85% of Python3 online submissions for Ransom Note.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Ransom Note.
"""


from collections import Counter


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        rCounter = Counter(ransomNote)
        mCounter = Counter(magazine)
        return rCounter == (rCounter & mCounter)
