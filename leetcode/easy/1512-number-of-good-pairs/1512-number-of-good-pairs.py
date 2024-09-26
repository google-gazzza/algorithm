"""
1512-number-of-good-pairs
leetcode/easy/1512. Number of Good Pairs
Difficulty: easy
URL: https://leetcode.com/problems/number-of-good-pairs/
"""

from typing import List


class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        counter_dict = {}
        for x in nums:
            counter_dict[x] = counter_dict.get(x, 0) + 1

        result = 0
        for x in nums:
            counter_dict[x] = counter_dict[x] - 1
            result += counter_dict[x]

        return result


def test():
    s = Solution()
    input = [1, 2, 3, 1, 1, 3]
    output = 4
    assert s.numIdenticalPairs(input) == output
    # explanation: there are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

    input = [1, 1, 1, 1]
    output = 6
    assert s.numIdenticalPairs(input) == output

    input = [1, 2, 3]
    output = 0
    assert s.numIdenticalPairs(input) == output
