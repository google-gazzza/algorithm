"""
1365-how-many-numbers-are-smaller-than-the-current-number 
leetcode/easy/1365. How Many Numbers Are Smaller Than the Current Number
Difficulty: easy
URL: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
"""

from typing import List


class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        array = [0] * 101

        for num in nums:
            array[num] += 1

        return list(map(lambda x: sum(array[0:x]), nums))


def test():
    s = Solution()
    input = [8, 1, 2, 2, 3]
    output = [4, 0, 1, 1, 3]
    assert s.smallerNumbersThanCurrent(input) == output

    input = [6, 5, 4, 8]
    output = [2, 1, 0, 3]
    assert s.smallerNumbersThanCurrent(input) == output

    input = [7, 7, 7, 7]
    output = [0, 0, 0, 0]
    assert s.smallerNumbersThanCurrent(input) == output
