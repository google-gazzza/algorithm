"""
https://leetcode.com/problems/longest-word-in-dictionary/
Runtime: 72 ms, faster than 93.67% of Python3 online submissions for Longest Word in Dictionary.
Memory Usage: 14.3 MB, less than 50.00% of Python3 online submissions for Longest Word in Dictionary.
"""


class Solution:
    def longestWord(self, words: List[str]) -> str:
        
        words.sort()
        sorted_words = sorted(words, key=len, reverse=True)
        
        for idx, word in enumerate(sorted_words):
            check = word
            if len(check) == 1:
                return word
            while check[:-1] in sorted_words[idx:]:
                check = check[:-1]
                if len(check) == 1:
                    return word

                
