"""
https://leetcode.com/problems/shortest-distance-to-a-character/
Runtime: 52 ms, faster than 42.02% of Python3 online submissions for Shortest Distance to a Character.
Memory Usage: 13.8 MB, less than 7.69% of Python3 online submissions for Shortest Distance to a Character.
"""


class Solution:
    def shortestToChar(self, S: str, C: str) -> List[int]:
        return [min(S[i:].find(C) if S[i:].find(C) > -1 else len(S), S[i::-1].find(C) if S[i::-1].find(C) > -1 else len(S)) for i in range(len(S))]
