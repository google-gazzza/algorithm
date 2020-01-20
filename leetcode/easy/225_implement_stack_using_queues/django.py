"""
https://leetcode.com/problems/implement-stack-using-queues/
Runtime: 20 ms, faster than 96.12% of Python3 online submissions for Implement Stack using Queues.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Implement Stack using Queues.
"""

class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.stack = []


    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self.stack.append(x)


    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        return self.stack.pop()


    def top(self) -> int:
        """
        Get the top element.
        """
        return self.stack[-1]


    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        if self.stack:
            return False
        return True

