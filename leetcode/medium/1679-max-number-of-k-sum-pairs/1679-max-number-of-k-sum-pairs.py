# leetcode/medium/1679. Max Number of K-Sum Pairs
# 1679-max-number-of-k-sum-pairs
# URL: https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&id=leetcode-75
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def maxOperations(self, nums: List[int], k: int) -> int:

        nums.sort()
        i = 0
        j = len(nums) - 1
        count = 0

        while i < j:
            if nums[i] + nums[j] == k:
                count += 1
                i += 1
                j -= 1
            elif nums[i] + nums[j] < k:
                i += 1
            else:
                j -= 1

        return count


nums = [1, 2, 3, 4]
k = 5
print(Solution().maxOperations(nums, k))
# Output: 2


nums = [3, 1, 3, 4, 3]
k = 6
print(Solution().maxOperations(nums, k))
# Output: 1
