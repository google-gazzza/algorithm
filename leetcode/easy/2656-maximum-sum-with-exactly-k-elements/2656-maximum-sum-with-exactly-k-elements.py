# leetcode/easy/2656. Maximum Sum With Exactly K Elements
# 2656-maximum-sum-with-exactly-k-elements
# URL: https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        start = max(nums)
        total = 0

        for i in range(k):
            total += start
            start += 1

        return total


nums = [1, 2, 3, 4, 5]
k = 3
print(Solution().maximizeSum(nums, k))
# Output: 18

nums = [5, 5, 5]
k = 2
print(Solution().maximizeSum(nums, k))
# Output: 11
