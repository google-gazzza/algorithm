"""
https://leetcode.com/problems/shortest-completing-word/
Runtime: 176 ms, faster than 5.68% of Python3 online submissions for Shortest Completing Word.
Memory Usage: 14 MB, less than 50.00% of Python3 online submissions for Shortest Completing Word.
"""


from collections import Counter


class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        
        temp = ''
        for ch in licensePlate:
            if ch.isalpha():
                temp += ch.lower()
        
        source = Counter(temp)
        
        result = None
        for word in words:
            if Counter(word.lower()) & source == source:
                if result == None:
                    result = word
                elif len(result) > len(word):
                    result = word
        
        return result
                
