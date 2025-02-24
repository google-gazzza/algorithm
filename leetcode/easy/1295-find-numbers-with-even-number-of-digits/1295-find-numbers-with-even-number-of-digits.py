"""
1295-find-numbers-with-even-number-of-digits
leetcode/easy/1295. Find Numbers with Even Number of Digits
Difficulty: easy
URL: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
"""

from typing import List


class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        return len(list(filter(lambda x: len(str(x)) % 2 == 0, nums)))


def test():
    nums = [12, 345, 2, 6, 7896]
    output = 2
    assert Solution().findNumbers(nums) == output

    nums = [555, 901, 482, 1771]
    output = 1
    assert Solution().findNumbers(nums) == output
