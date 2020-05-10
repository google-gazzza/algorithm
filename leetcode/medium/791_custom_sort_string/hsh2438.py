"""
https://leetcode.com/problems/custom-sort-string/
Runtime: 20 ms, faster than 97.72% of Python3 online submissions for Custom Sort String.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Custom Sort String.
"""


class Solution:
    def customSortString(self, S: str, T: str) -> str:
        t_list = list(T)
        results = ''
        for s in S:
            while s in t_list:
                results += s
                t_list.remove(s)
        
        results += ''.join(t_list)
        
        return results
        
