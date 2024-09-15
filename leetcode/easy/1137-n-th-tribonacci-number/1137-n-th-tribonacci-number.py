"""
1137-n-th-tribonacci-number
leetcode/easy/1137. N-th Tribonacci Number
Difficulty: easy
URL: https://leetcode.com/problems/n-th-tribonacci-number/
"""

from typing import List


class Solution:
    def tribonacci(self, n: int) -> int:
        _list = [0, 1, 1]

        if n < 3:
            return _list[n]

        while n > 2:
            [a, b, c] = _list
            _list = [b, c, a + b + c]
            n -= 1

        print(_list)
        return _list[-1]


def test():
    n = 4
    output = 4
    assert Solution().tribonacci(n) == output

    n = 25
    output = 1389537
    assert Solution().tribonacci(n) == output