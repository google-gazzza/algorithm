"""
https://leetcode.com/problems/reverse-vowels-of-a-string/
Runtime: 96 ms, faster than 10.27% of Python3 online submissions for Reverse Vowels of a String.
Memory Usage: 13.2 MB, less than 100.00% of Python3 online submissions for Reverse Vowels of a String.
"""


class Solution:
    def reverseVowels(self, s: str) -> str:
        vowel_list = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U']
        
        vowels = [ch for ch in s if ch in vowel_list]
        idx_vowels = len(vowels) - 1
        result = ''
        
        for ch in s:
            if ch in vowel_list:
                result += vowels[idx_vowels]
                idx_vowels -= 1
            else:
                result += ch
        
        return result
