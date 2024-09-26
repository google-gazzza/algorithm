# leetcode/easy/643. Maximum Average Subarray I
# 643-maximum-average-subarray-i
# URL: https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&id=leetcode-75
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        if len(nums) < k:
            return sum(nums) / len(nums)

        rangeSum = sum(nums[0:k])
        max = rangeSum

        for i in range(k, len(nums)):
            rangeSum -= nums[i - k]
            rangeSum += nums[i]

            if rangeSum > max:
                max = rangeSum

        return max / k


nums = [1, 12, -5, -6, 50, 3]
k = 4
print(Solution().findMaxAverage(nums, k))
# Output: 12.75000

nums = [5]
k = 1
print(Solution().findMaxAverage(nums, k))
# Output: 5.00000
