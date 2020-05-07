'''
https://leetcode.com/problems/find-the-difference

Runtime: 32 ms, faster than 71.98% of Python3 online submissions for Find the Difference.
Memory Usage: 13.8 MB, less than 10.00% of Python3 online submissions for Find the Difference.
'''
class Solution:
    def findTheDifference(self, S: str, T: str) -> str:
        for t in T:
            if S.count(t) is not T.count(t): 
                return t
