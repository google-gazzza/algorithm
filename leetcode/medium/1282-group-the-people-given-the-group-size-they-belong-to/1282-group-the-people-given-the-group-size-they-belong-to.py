"""
1282-group-the-people-given-the-group-size-they-belong-to
leetcode/medium/1282. Group the People Given the Group Size They Belong To
Difficulty: medium
URL: https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
"""

from typing import List


class Solution:
    def chunks(self, _list, n):
        for i in range(0, len(_list), n):
            yield _list[i:i + n]

    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        _dict = {}

        for i, size in enumerate(groupSizes):
            if size not in _dict:
                _dict[size] = []

            _dict[size].append(i)

        result = []

        for size, group in _dict.items():
            for chunk in self.chunks(group, size):
                result.append(chunk)

        return result


def test():
    groupSizes = [3, 3, 3, 3, 3, 1, 3]
    output = [[0, 1, 2], [3, 4, 6], [5]]
    assert Solution().groupThePeople(groupSizes) == output

    groupSizes = [2, 1, 3, 3, 3, 2]
    output = [[0, 5], [1], [2, 3, 4]]
    assert Solution().groupThePeople(groupSizes) == output
