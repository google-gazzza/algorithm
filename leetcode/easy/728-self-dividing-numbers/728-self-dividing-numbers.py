"""
728-self-dividing-numbers
leetcode/easy/728. Self Dividing Numbers
Difficulty: easy
URL: https://leetcode.com/problems/self-dividing-numbers/
"""

from typing import List


class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        result = []

        for i in range(left, right + 1):
            if all([(_i != 0 and i % _i == 0) for _i in map(int, str(i))]):
                result.append(i)

        return result


def test():
    left = 1
    right = 22
    output = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
    assert Solution().selfDividingNumbers(left, right) == output

    left = 47
    right = 85
    output = [48, 55, 66, 77]
    assert Solution().selfDividingNumbers(left, right) == output
