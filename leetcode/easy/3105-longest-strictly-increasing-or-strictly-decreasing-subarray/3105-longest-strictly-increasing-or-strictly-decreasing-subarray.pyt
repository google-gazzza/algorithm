# // 3110-score-of-a-string
# // URL: https://leetcode.com/problems/score-of-a-string/description/
from _ast import List


# NOTE: top python solution of leetcode + modified by me

class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        if not nums:
            return 0

        consecutiveIncreaseCount = 1
        consecutiveDecreaseCount = 1
        maximumConsecutiveCount = 1

        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                consecutiveIncreaseCount += 1
                consecutiveDecreaseCount = 1
            elif nums[i] < nums[i - 1]:
                consecutiveDecreaseCount += 1
                consecutiveIncreaseCount = 1
            else:
                consecutiveIncreaseCount = 1
                consecutiveDecreaseCount = 1

            maximumConsecutiveCount = max(
                maximumConsecutiveCount,
                consecutiveDecreaseCount,
                consecutiveIncreaseCount
            )

        return maximumConsecutiveCount

# NOTE: naive solution
# class Solution:
#     def reverseArray(self, nums: List[int]) -> List[int]:
#         return nums[::-1]
#
#     def getLongestMonotonicSubarrayLength(self, nums: List[int]) -> int:
#         if not nums:
#             return 0
#
#         max_length = 0
#         current = 1
#
#         for i in range(1, len(nums)):
#             if nums[i] > nums[i - 1]:
#                 current += 1
#             else:
#                 max_length = max(max_length, current)
#                 current = 1
#
#         return max(max_length, current)
#
#     def longestMonotonicSubarray(self, nums: List[int]) -> int:
#         return max(
#             self.getLongestMonotonicSubarrayLength(nums),
#             self.getLongestMonotonicSubarrayLength(self.reverseArray(nums))
#         )
