"""
1979-find-greatest-common-divisor-of-array
leetcode/easy/1979. Find Greatest Common Divisor of Array
Difficulty: easy
URL: https://leetcode.com/problems/find-greatest-common-divisor-of-array/
"""

from typing import List


class Solution:
    def gcd(self, a, b):
        if b == 0:
            return a

        return self.gcd(b, a % b)

    def findGCD(self, nums: List[int]) -> int:
        return self.gcd(max(nums), min(nums))


def test():
    solution = Solution()

    nums = [2, 5, 6, 9, 10]
    output = 2
    assert solution.findGCD(nums) == output

    nums = [7, 5, 6, 8, 3]
    output = 1
    assert solution.findGCD(nums) == output

    nums = [3, 3]
    output = 3
    assert solution.findGCD(nums) == output
