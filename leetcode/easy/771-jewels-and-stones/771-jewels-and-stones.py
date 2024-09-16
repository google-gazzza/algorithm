"""
771-jewels-and-stones
leetcode/easy/771. Jewels and Stones
Difficulty: easy
URL: https://leetcode.com/problems/jewels-and-stones/
"""

# Pythonic
class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        return len(list(filter(lambda x: x in jewels, stones)))


def test():
    s = Solution()

    jewels = "aA"
    stones = "aAAbbbb"
    output = 3
    assert s.numJewelsInStones(jewels, stones) == output

    jewels = "z"
    stones = "ZZ"
    output = 0
    assert s.numJewelsInStones(jewels, stones) == output
