# leetcode/medium/281. Zigzag Iterator
# 281-zigzag-iterator
# URL: https://leetcode.com/problems/zigzag-iterator/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

from typing import List


class ZigzagIterator:
    def __init__(self, v1: List[int], v2: List[int]):
        self.list_1 = v1
        self.list_2 = v2
        self.isLeftTurn = True

    def next(self) -> int:
        if self.isLeftTurn and len(self.list_1) > 0:
            self.isLeftTurn = False
            return self.list_1.pop(0)

        if len(self.list_2) == 0:
            return self.list_1.pop(0)

        self.isLeftTurn = True
        return self.list_2.pop(0)

    def hasNext(self) -> bool:
        return len(self.list_1) > 0 or len(self.list_2) > 0


# Your ZigzagIterator object will be instantiated and called as such:
# i, v = ZigzagIterator(v1, v2), []
# while i.hasNext(): v.append(i.next())
