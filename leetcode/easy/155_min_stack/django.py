"""
https://leetcode.com/problems/min-stack/
Runtime: 48 ms, faster than 99.36% of Python3 online submissions for Min Stack.
Memory Usage: 16.2 MB, less than 100.00% of Python3 online submissions for Min Stack.
"""

class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.stack = []
        self.minVal = None


    def push(self, x: int) -> None:
        self.stack.append(x)

        if self.minVal is None:
            self.minVal = x
        else:
            self.minVal = min(self.minVal, x)


    def pop(self) -> None:
        popVal = self.stack.pop()

        if not self.stack:
            self.minVal = None
        elif popVal == self.minVal:
            self.minVal = min(self.stack)


    def top(self) -> int:
        return self.stack[-1]


    def getMin(self) -> int:
        return self.minVal


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
