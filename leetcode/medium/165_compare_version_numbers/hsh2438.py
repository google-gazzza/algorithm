"""
https://leetcode.com/problems/compare-version-numbers/
Runtime: 44 ms, faster than 5.74% of Python3 online submissions for Compare Version Numbers.
Memory Usage: 12.6 MB, less than 100.00% of Python3 online submissions for Compare Version Numbers.
"""


class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        
        v1 = list(map(int, version1.split('.')))
        v2 = list(map(int, version2.split('.')))
        
        len_v1 = len(v1)
        len_v2 = len(v2)
        
        if len_v1 > len_v2:
            for _ in range(len_v1 - len_v2):
                v2.append(0)
        else:
            for _ in range(len_v2 - len_v1):
                v1.append(0)
                
        for i in range(len(v1)):
            if v1[i] > v2[i]:
                return 1
            elif v1[i] < v2[i]:
                return -1
        
        return 0
