"""
1528-shuffle-string
leetcode/easy/1528. Shuffle String
Difficulty: easy
URL: https://leetcode.com/problems/shuffle-string/
"""

from typing import List


class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        zipped_list = list(zip([*s], indices))
        zipped_list.sort(key=lambda x: x[1])

        return ''.join([x[0] for x in zipped_list])


def test():
    solution = Solution()

    s = "codeleet"
    indices = [4, 5, 6, 7, 0, 2, 1, 3]
    output = "leetcode"

    assert solution.restoreString(s, indices) == output