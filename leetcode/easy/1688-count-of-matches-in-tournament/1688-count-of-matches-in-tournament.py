"""
1688-count-of-matches-in-tournament
leetcode/easy/1688. Count of Matches in Tournament
Difficulty: easy
URL: https://leetcode.com/problems/count-of-matches-in-tournament/
"""

class Solution:
    def numberOfMatches(self, n: int, sum=0) -> int:
        return sum if n == 1 else self.numberOfMatches(n - (n // 2), sum + (n // 2))


def test():
    solution = Solution()

    assert solution.numberOfMatches(7) == 6
    assert solution.numberOfMatches(14) == 13

