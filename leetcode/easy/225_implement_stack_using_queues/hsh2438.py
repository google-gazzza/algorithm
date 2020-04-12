"""
https://leetcode.com/problems/implement-stack-using-queues/
Runtime: 24 ms, faster than 83.96% of Python3 online submissions for Implement Stack using Queues.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Implement Stack using Queues.
"""


class MyStack:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.my_stack = []
        

    def push(self, x: int) -> None:
        """
        Push element x onto stack.
        """
        self.my_stack.append(x)
        

    def pop(self) -> int:
        """
        Removes the element on top of the stack and returns that element.
        """
        return self.my_stack.pop()
        

    def top(self) -> int:
        """
        Get the top element.
        """
        return self.my_stack[-1]
        

    def empty(self) -> bool:
        """
        Returns whether the stack is empty.
        """
        return not len(self.my_stack)
        


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
