"""https://leetcode.com/problems/detect-capital/

Runtime: 20 ms, faster than 98.18% of Python3 online submissions for Detect Capital.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Detect Capital.
"""
class Solution:
    def isUpper(self, word: str) -> bool:
        return word.isupper()
        
    def isLower(self, word: str) -> bool:
        return word.islower()
        
    def detectCapitalUse(self, word: str) -> bool:
        return self.isUpper(word) or self.isLower(word) or self.isUpper(word[0]) and self.isLower(word[1:])
