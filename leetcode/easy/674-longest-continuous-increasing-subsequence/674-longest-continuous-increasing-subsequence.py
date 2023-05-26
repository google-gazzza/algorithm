# leetcode/easy/674. Longest Continuous Increasing Subsequence
# 674-longest-continuous-increasing-subsequence
# URL: https://leetcode.com/problems/longest-continuous-increasing-subsequence/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        longest_sequence = 0
        current_sequence = 1

        for i in range(1, len(nums)):

            if nums[i - 1] < nums[i]:
                current_sequence += 1
            else:
                longest_sequence = max(longest_sequence, current_sequence)
                current_sequence = 1

        return max(longest_sequence, current_sequence)


nums = [1, 3, 5, 4, 7]
print(Solution().findLengthOfLCIS(nums))
# Output: 3

nums = [2, 2, 2, 2, 2]
print(Solution().findLengthOfLCIS(nums))
# Output: 1

nums = [1, 2, 3, 4]
print(Solution().findLengthOfLCIS(nums))
# Output: 4
