"""
1769-minimum-number-of-operations-to-move-all-balls-to-each-box
leetcode/medium/1769. Minimum Number of Operations to Move All Balls to Each Box
difficulty: medium
URL: https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
"""

from typing import List


class Solution:
    def accumulateToRight(self, boxes):
        operations = 0
        result = []
        item_count = 0

        for item in boxes:
            result.append(operations)
            if item:
                item_count += 1
            operations += (item_count)

        return result

    def minOperations(self, boxes: str) -> List[int]:
        _boxes = [int(box) for box in boxes]

        left_to_right_result = self.accumulateToRight(_boxes)
        right_to_left_result = self.accumulateToRight(_boxes[::-1])[::-1]

        result = []
        for item in zip(left_to_right_result, right_to_left_result):
            result.append(sum(item))

        return result


def test():
    boxes = "110"
    output = [1, 1, 3]
    assert Solution().minOperations(boxes) == output
    boxes = "001011"

    output = [11, 8, 5, 4, 3, 4]
    assert Solution().minOperations(boxes) == output
