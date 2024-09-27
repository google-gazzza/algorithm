# leetcode/medium/1004. Max Consecutive Ones III
# 1004-max-consecutive-ones-iii
# URL: https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&id=leetcode-75
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

from typing import List


class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        max_window_size = 0
        window_size = 0
        num_zero = 0

        for i in range(len(nums)):
            if nums[i] == 0:
                num_zero += 1

            while num_zero > k:
                if nums[i - window_size] == 0:
                    num_zero -= 1
                window_size -= 1

            window_size += 1

            max_window_size = max(max_window_size, window_size)

        return max_window_size


nums = [0, 0, 1, 1, 1]
k = 0
print(Solution().longestOnes(nums, k))
# 3

nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
k = 2
print(Solution().longestOnes(nums, k))
# Output: 6
# Explanation: [1,1,1,0,0,1,1,1,1,1,1]

nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
k = 3
print(Solution().longestOnes(nums, k))
# Output: 10

nums = [0, 0, 1, 1, 1, 0, 0]
k = 0
print(Solution().longestOnes(nums, k))
# 3