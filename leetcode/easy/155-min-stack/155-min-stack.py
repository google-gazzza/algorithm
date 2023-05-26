"""
155-min-stack
leetcode/easy/155. Min Stack
Difficulty: easy
URL: https://leetcode.com/problems/min-stack/
"""

class MinStack:
    def __init__(self):
        self.stack = []
        """
        initialize your data structure here.
        """

    def push(self, val: int) -> None:
        self.stack.append(val)

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return min(self.stack)