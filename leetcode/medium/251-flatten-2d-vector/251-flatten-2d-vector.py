"""
251-flatten-2d-vector
leetcode/medium/251. Flatten 2D Vector
Difficulty: medium
URL: https://leetcode.com/problems/flatten-2d-vector/
"""

from typing import List


class Vector2D:
    def flattening(self, _list, _result):
        for item in _list:
            if not isinstance(item, list):
                _result.append(item)
            else:
                self.flattening(item, _result)

    def __init__(self, vec: List[List[int]]):
        self._list = []
        self.flattening(vec, self._list)

    def next(self) -> int:
        return self._list.pop(0)

    def hasNext(self) -> bool:
        return len(self._list) > 0


def test():
    vector2D = Vector2D([[1, 2], [3], [4]])
    assert vector2D.next() == 1
    assert vector2D.next() == 2
    assert vector2D.next() == 3
    assert vector2D.hasNext() == True
    assert vector2D.hasNext() == True
    assert vector2D.next() == 4
    assert vector2D.hasNext() == False
