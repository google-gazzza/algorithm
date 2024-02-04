"""
https://leetcode.com/problems/maximum-product-of-word-lengths/
Runtime: 6404 ms, faster than 6.76% of Python3 online submissions for Maximum Product of Word Lengths.
Memory Usage: 14.3 MB, less than 25.00% of Python3 online submissions for Maximum Product of Word Lengths.
"""


class Solution:
    def maxProduct(self, words: List[str]) -> int:
        
        max_len = 0
        
        for i in range(len(words)):
            for j in range(i+1, len(words)):
                if len(set(words[i])) + len(set(words[j])) == len(set(words[i]+words[j])):
                    product_len = len(words[i]) * len(words[j])
                    if max_len < product_len:
                        max_len = product_len
        
        return max_len
