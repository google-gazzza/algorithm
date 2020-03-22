"""
https://leetcode.com/problems/word-pattern/
Runtime: 28 ms, faster than 56.48% of Python3 online submissions for Word Pattern.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Word Pattern.
"""


class Solution:
    def wordPattern(self, pattern: str, str: str) -> bool:
        
        if len(pattern) != len(str.split(' ')):
            return False
        
        pattern_dic = {}
        
        for i, token in enumerate(str.split(' ')):
            if token in pattern_dic.keys():
                if pattern[i] != pattern_dic[token]:
                    return False
            else:
                if pattern[i] in pattern_dic.values():
                    return False
                pattern_dic[token] = pattern[i]
        
        return True
