# leetcode/medium/2679. Sum in a Matrix
# 2679-sum-in-a-matrix
# URL: https://leetcode.com/problems/sum-in-a-matrix/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def matrixSum(self, nums: List[List[int]]) -> int:
        for row in nums:
            row.sort(reverse=True)

        result = 0

        for i in range(len(nums[0])):
            column = [nums[j][i] for j in range(len(nums))]
            result += max(column)

        return result


nums = [[7, 2, 1], [6, 4, 2], [6, 5, 3], [3, 2, 1]]
print(Solution().matrixSum(nums))
# Output: 15

nums = [[1]]
print(Solution().matrixSum(nums))
# Output: 1
