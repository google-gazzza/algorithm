'''
https://leetcode.com/problems/bulls-and-cows/
Runtime: 36 ms, faster than 81.36% of Python3 online submissions for Bulls and Cows.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Bulls and Cows.
'''


from collections import defaultdict

class Solution:
    def getHint(self, secret: str, guess: str) -> str:
        
        a, b = 0, 0
        
        sdict, gdict = defaultdict(int), defaultdict(int)
        
        for i in range(len(secret)):
            if secret[i] == guess[i]:
                a += 1
            else:
                sdict[secret[i]] += 1
                gdict[guess[i]] += 1
        
        for key in gdict.keys():
            b += min(sdict[key], gdict[key])
            
        return f"{str(a)}A{str(b)}B"