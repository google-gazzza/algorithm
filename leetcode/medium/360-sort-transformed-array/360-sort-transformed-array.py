# leetcode/medium/360. Sort Transformed Array
# 360-sort-transformed-array
# URL: https://leetcode.com/problems/sort-transformed-array/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:

    def transform(self, x, a, b, c):
        return a * x * x + b * x + c

    def sortTransformedArray(self, nums: List[int], a: int, b: int, c: int) -> List[int]:
        return sorted(map(lambda x: self.transform(x, a, b, c), nums))


nums = [-4, -2, 2, 4]
a = 1
b = 3
c = 5
assert Solution().sortTransformedArray(nums, a, b, c) == [3, 9, 15, 33]
# Output: [3,9,15,33]

nums = [-4, -2, 2, 4]
a = -1
b = 3
c = 5
assert Solution().sortTransformedArray(nums, a, b, c) == [-23, -5, 1, 7]
# Output: [-23,-5,1,7]
