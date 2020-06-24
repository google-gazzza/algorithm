"""
https://leetcode.com/problems/isomorphic-strings/
Runtime: 40 ms, faster than 56.68% of Python3 online submissions for Isomorphic Strings.
Memory Usage: 14.1 MB, less than 17.50% of Python3 online submissions for Isomorphic Strings.
"""


class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        dic = {}
        
        for i in range(len(s)):
            if s[i] in dic.keys():
                if dic[s[i]] != t[i]:
                    return False
            else:
                if t[i] in dic.values():
                    return False
                dic[s[i]] = t[i]
        
        return True
