"""
https://leetcode.com/problems/most-common-word/
Runtime: 28 ms, faster than 92.31% of Python3 online submissions for Most Common Word.
Memory Usage: 14 MB, less than 5.88% of Python3 online submissions for Most Common Word.
"""


import re
from collections import Counter

class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        paragraph = paragraph.lower()
        paragraph = re.sub('[^a-z ]+', ' ', paragraph)
        
        words = paragraph.split()
        
        counter = Counter(words)
        
        for key, count in counter.most_common():
            if not key in banned:
                return key
