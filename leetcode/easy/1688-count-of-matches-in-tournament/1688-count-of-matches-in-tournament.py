"""
1688-count-of-matches-in-tournament
leetcode/easy/1688. Count of Matches in Tournament
Difficulty: easy
URL: https://leetcode.com/problems/count-of-matches-in-tournament/
"""

class Solution:
    def numberOfMatches(self, n: int, sum=0) -> int:
        return sum if n == 1 else self.numberOfMatches(n - (n // 2), sum + (n // 2))
