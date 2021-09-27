"""
https://leetcode.com/problems/implement-queue-using-stacks/
Runtime: 32 ms, faster than 11.96% of Python3 online submissions for Implement Queue using Stacks.
Memory Usage: 13 MB, less than 70.00% of Python3 online submissions for Implement Queue using Stacks.
"""


class MyQueue:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.queue = []


    def push(self, x: int) -> None:
        """
        Push element x to the back of queue.
        """
        self.queue.append(x)


    def pop(self) -> int:
        """
        Removes the element from in front of queue and returns that element.
        """
        return self.queue.pop(0)


    def peek(self) -> int:
        """
        Get the front element.
        """
        return self.queue[0]


    def empty(self) -> bool:
        """
        Returns whether the queue is empty.
        """
        return not len(self.queue)



# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
