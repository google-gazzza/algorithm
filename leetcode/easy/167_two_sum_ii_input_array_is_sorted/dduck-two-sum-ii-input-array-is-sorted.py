# https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

from unittest import TestCase
from typing import List


class Solution:
# Runtime: 76 ms, faster than 24.56% of Python3 online submissions for Two Sum II - Input array is sorted.
# Memory Usage: 42.5 MB, less than 5.80% of Python3 online submissions for Two Sum II - Input array is sorted.
    def twoSum(self, numbers: List[int], target: int, leftIndex=0, rightIndex=-1) -> List[int]:
        sum = numbers[leftIndex] + numbers[rightIndex]
        if sum == target:
            return [leftIndex + 1, len(numbers) + rightIndex + 1]
        if sum > target:
            rightIndex -= 1
        else:
            leftIndex += 1
        return self.twoSum(numbers, target, leftIndex, rightIndex)

# Runtime: 60 ms, faster than 88.83% of Python3 online submissions for Two Sum II - Input array is sorted.
# Memory Usage: 13.2 MB, less than 100.00% of Python3 online submissions for Two Sum II - Input array is sorted.
    def twoSum2(self, numbers: List[int], target: int, leftIndex=0, rightIndex=-1) -> List[int]:
        sum = numbers[leftIndex] + numbers[rightIndex]
        while sum != target:
            if sum > target:
                rightIndex -= 1
            else:
                leftIndex += 1
            sum = numbers[leftIndex] + numbers[rightIndex]
        return [leftIndex + 1, len(numbers) + rightIndex + 1]


TestCase().assertEqual(Solution().twoSum2([2, 7, 11, 15], 9), [1, 2])
