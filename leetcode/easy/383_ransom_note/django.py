'''
https://leetcode.com/problems/ransom-note/
Runtime: 72 ms, faster than 33.85% of Python3 online submissions for Ransom Note.
Memory Usage: 12.6 MB, less than 100.00% of Python3 online submissions for Ransom Note.
'''

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        
        notedict = self.count(ransomNote)
        magadict = self.count(magazine)
        
        for k, v in notedict.items():
            if k not in magadict:
                return False
            
            if v > magadict[k]:
                return False
            
        return True
        
        
        
    def count(self, strings):
        res = dict()
        
        for string in strings:
            if string not in res:
                res[string] = 1
            else:
                res[string] += 1
        
        return res