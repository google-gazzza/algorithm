"""
1486-xor-operation-in-an-array 
leetcode/easy/1486. XOR Operation in an Array
Difficulty: easy
URL: https://leetcode.com/problems/xor-operation-in-an-array/
"""

import functools


class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        return functools.reduce(lambda a, b: a ^ b, [start + (i * 2) for i in range(0, n)])


def test():
    solution = Solution()
    
    assert solution.xorOperation(5, 0) == 8
    assert solution.xorOperation(4, 3) == 8
