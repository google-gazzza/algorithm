"""
1431-kids-with-the-greatest-number-of-candies 
leetcode/easy/1431. Kids With the Greatest Number of Candies
Difficulty: easy
URL: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
"""

from typing import List


class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        max_candie = max(candies)
        return list(map(lambda x: (x + extraCandies) >= max_candie, candies))


def test():
    s = Solution()
    candies = [2, 3, 5, 1, 3]
    extraCandies = 3
    output = [True, True, True, False, True]
    assert s.kidsWithCandies(candies, extraCandies) == output

    candies = [4, 2, 1, 1, 2]
    extraCandies = 1
    output = [True, False, False, False, False]
    assert s.kidsWithCandies(candies, extraCandies) == output

    candies = [12, 1, 12]
    output = [True, False, True]
    extraCandies = 10
    assert s.kidsWithCandies(candies, extraCandies) == output
