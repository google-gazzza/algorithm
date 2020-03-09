"""
https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/
Runtime: 124 ms, faster than 54.78% of Python3 online submissions for Compare Strings by Frequency of the Smallest Character.
Memory Usage: 13.2 MB, less than 100.00% of Python3 online submissions for Compare Strings by Frequency of the Smallest Character.
"""


import bisect
from collections import Counter


class Solution:
    def numSmallerByFrequency(self, queries: List[str], words: List[str]) -> List[int]:
        
        def f(s):
            counter =  Counter(s)
            return counter[sorted(counter.keys())[0]]
        
        f_queries = []
        for query in queries:
            f_queries.append(f(query))
            
        f_words = []
        for word in words:
            f_words.append(f(word))
        
        f_words.sort()
        
        results = []
        for f_query in f_queries:
            if f_query in f_words:
                results.append(len(f_words) - bisect.bisect_left(f_words, f_query+1))
            else:
                results.append(len(f_words) - bisect.bisect_left(f_words, f_query))
        
        return results
