"""
2011-final-value-of-variable-after-performing-operations 
leetcode/easy/2011. Final Value of Variable After Performing Operations
Difficulty: easy
URL: https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
"""

from typing import List


class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        return sum([1 if '+' in operation else -1 for operation in operations])


def test():
    s = Solution()

    operations = ["--X", "X++", "X++"]
    output = 1
    assert s.finalValueAfterOperations(operations) == output

    operations = ["++X", "++X", "X++"]
    output = 3
    assert s.finalValueAfterOperations(operations) == output

    operations = ["X++", "++X", "--X", "X--"]
    output = 0
    assert s.finalValueAfterOperations(operations) == output
