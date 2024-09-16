"""
347-top-k-frequent-elements
leetcode/medium/347. Top K Frequent Elements
Difficulty: medium
URL: https://leetcode.com/problems/top-k-frequent-elements/
"""

from typing import List

from collections import Counter


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        _list = list(Counter(nums).items())
        _list.sort(key=lambda x: x[1], reverse=True)

        return list(map(lambda item: item[0], _list[:k]))


def test():
    nums = [1, 1, 1, 2, 2, 3]
    k = 2
    output = [1, 2]
    assert Solution().topKFrequent(nums, k) == output

    nums = [1]
    k = 1
    output = [1]
    assert Solution().topKFrequent(nums, k) == output

    nums = [3, 0, 1, 0]
    k = 1
    output = [0]
    assert Solution().topKFrequent(nums, k) == output