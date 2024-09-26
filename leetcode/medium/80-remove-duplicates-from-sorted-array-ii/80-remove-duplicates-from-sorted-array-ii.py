# leetcode/medium/80. Remove Duplicates from Sorted Array II
# 80-remove-duplicates-from-sorted-array-ii
# URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&id=top-interview-150
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        index = 2

        while index < len(nums):
            if nums[index] == nums[index - 2]:
                nums.remove(nums[index])
            else:
                index += 1

        return len(nums)


nums = [1, 1, 1, 2, 2, 3]
print(Solution().removeDuplicates(nums))
# Output: 5 nums = [1,1,2,2,3,_]

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
print(Solution().removeDuplicates(nums))
# Output: 7, nums = [0,0,1,1,2,3,3,_,_]
