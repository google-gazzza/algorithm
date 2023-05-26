"""
380-insert-delete-getrandom-o-1
leetcode/medium/380. Insert Delete GetRandom O(1)
Difficulty: medium
URL: https://leetcode.com/problems/insert-delete-getrandom-o1/
"""

from random import sample


class RandomizedSet:
    def __init__(self):
        self._set = set()
        self._list = []

    def insert(self, val: int) -> bool:
        if val in self._set:
            return False

        self._set.add(val)
        self._list.append(val)
        return True

    def remove(self, val: int) -> bool:
        if val in self._set:
            self._list.remove(val)
            self._set.remove(val)
            return True

        return False

    def getRandom(self) -> int:
        return sample(self._list, 1)[0]


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()


def test():
    randomizedSet = RandomizedSet()
    assert randomizedSet.insert(1) == True
    assert randomizedSet.remove(2) == False
    assert randomizedSet.insert(2) == True
    # randomizedSet.getRandom()
    assert randomizedSet.remove(1) == True
    assert randomizedSet.insert(2) == False
    assert randomizedSet.getRandom() == 2
    