'''
https://leetcode.com/problems/word-pattern/
Runtime: 24 ms, faster than 87.22% of Python3 online submissions for Word Pattern.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Word Pattern.
'''


class Solution:
    def wordPattern(self, pattern: str, str: str) -> bool:
        
        strLst = str.split()
        lstLen = len(strLst)
        
        if len(pattern) != lstLen:
            return False
        
        patternDic = {}
        
        for i in range(lstLen):
            if pattern[i] in patternDic:
                if strLst[i] != patternDic[pattern[i]]:
                    return False
            else:
                if strLst[i] in patternDic.values():
                    return False
                patternDic[pattern[i]] = strLst[i]
                
        return True
            
        