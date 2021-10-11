"""
1656-design-an-ordered-stream
leetcode/easy/1656. Design an Ordered Stream
URL: https://leetcode.com/problems/design-an-ordered-stream/
"""

from typing import List


class OrderedStream:

    def __init__(self, n: int):
        self.stream = [None] * (n)
        self.ptr = 0

    def insert(self, idKey: int, value: str) -> List[str]:
        self.stream[idKey - 1] = value

        print(idKey, self.ptr)
        if idKey - 1 == self.ptr:
            new_ptr = self.stream.index(None) if None in self.stream else -1

            if new_ptr != -1:
                result = self.stream[self.ptr:new_ptr]
            else:
                result = self.stream[self.ptr:]
            self.ptr = new_ptr

            return result

        return []
