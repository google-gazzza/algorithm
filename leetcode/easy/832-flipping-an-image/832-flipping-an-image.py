"""
832-flipping-an-image
leetcode/easy/832. Flipping an Image
URL: https://leetcode.com/problems/flipping-an-image/
"""

from typing import List


class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        return list(map(
            lambda _list:
            list(
                reversed(
                    list(
                        map(
                            lambda x: 1 if x == 0 else 0,
                            _list
                        )
                    )
                )
            ),
            image
        ))


def test():
    image = [[1, 1, 0], [1, 0, 1], [0, 0, 0]]
    output = [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
    assert Solution().flipAndInvertImage(image) == output

    image = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]
    output = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 1], [1, 0, 1, 0]]
    assert Solution().flipAndInvertImage(image) == output

