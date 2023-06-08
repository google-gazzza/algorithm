# leetcode/medium/324. Wiggle Sort II
# 324-wiggle-sort-ii
# URL: https://leetcode.com/problems/wiggle-sort-ii/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        nums.sort()
        middle = len(nums) // 2

        if len(nums) % 2 == 1:
            middle += 1

        left = nums[:middle]
        right = nums[middle:]

        for i in range(len(nums)):
            if i % 2 == 0 and len(left) > 0:
                nums[i] = left.pop()
            else:
                nums[i] = right.pop()
