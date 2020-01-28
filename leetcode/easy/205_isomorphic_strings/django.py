"""
https://leetcode.com/problems/isomorphic-strings/
Runtime: 208 ms, faster than 6.09% of Python3 online submissions for Isomorphic Strings.
Memory Usage: 13.5 MB, less than 25.00% of Python3 online submissions for Isomorphic Strings.
"""

class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        return self.strToCons(s) == self.strToCons(t)
        
        
    def strToCons(self, s: str):
        prvChr = []
        cons = []
        
        for c in s:
            if c not in prvChr:
                prvChr.append(c)
                
            cons.append(prvChr.index(c))
            
        return cons
