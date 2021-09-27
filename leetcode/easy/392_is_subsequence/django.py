'''
https://leetcode.com/problems/is-subsequence/
Runtime: 124 ms, faster than 69.29% of Python3 online submissions for Is Subsequence.
Memory Usage: 17.3 MB, less than 26.67% of Python3 online submissions for Is Subsequence.
'''

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        
        if not s:
            return True
        
        cur = 0
        slen = len(s)
        
        for i in range(len(t)):
            if t[i] == s[cur]:
                cur += 1
                
                if cur == slen:
                    return True
                
        return False

