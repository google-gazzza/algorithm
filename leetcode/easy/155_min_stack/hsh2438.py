"""
https://leetcode.com/problems/min-stack/
Runtime: 800 ms, faster than 21.26% of Python3 online submissions for Min Stack.
Memory Usage: 16.2 MB, less than 100.00% of Python3 online submissions for Min Stack.
"""


class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.min_stack = []

    def push(self, x: int) -> None:
        self.min_stack.append(x)

    def pop(self) -> None:
        self.min_stack.pop()

    def top(self) -> int:
        return self.min_stack[-1]

    def getMin(self) -> int:
        return min(self.min_stack)
