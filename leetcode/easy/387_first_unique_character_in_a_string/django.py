'''
https://leetcode.com/problems/first-unique-character-in-a-string/
Runtime: 132 ms, faster than 43.46% of Python3 online submissions for First Unique Character in a String.
Memory Usage: 13 MB, less than 100.00% of Python3 online submissions for First Unique Character in a String.
'''

class Solution:
    def firstUniqChar(self, s: str) -> int:
        from collections import defaultdict
        countdict = defaultdict(int)
        order = []   
    
        for i in range(len(s)):
            if s[i] not in countdict:
                order.append((s[i], i))
            countdict[s[i]] += 1
            
        for (ch, i) in order:
            if countdict[ch] == 1:
                return i
            
        return -1