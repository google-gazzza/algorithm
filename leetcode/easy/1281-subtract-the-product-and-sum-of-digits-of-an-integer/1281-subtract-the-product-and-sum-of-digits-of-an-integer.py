"""
1281-subtract-the-product-and-sum-of-digits-of-an-integer 
leetcode/easy/1281. Subtract the Product and Sum of Digits of an Integer
Difficulty: easy
URL: https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
"""

import math


class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        digits = list(map(int, str(n)))
        return math.prod(digits) - sum(digits)


def test():
    s = Solution()

    input = 234
    expect = 15
    assert s.subtractProductAndSum(input) == expect

    input = 4421
    expect = 21
    assert s.subtractProductAndSum(input) == expect