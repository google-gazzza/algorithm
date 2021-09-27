"""https://leetcode.com/problems/ransom-note/

Runtime: 40 ms, faster than 85.39% of Python3 online submissions for Ransom Note.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Ransom Note.
"""
from collections import Counter

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        r = Counter(ransomNote)
        m = Counter(magazine)
        for char, count in r.items():
            if count > m[char]: return False
        return True
