# leetcode/medium/378. Kth Smallest Element in a Sorted Matrix
# 378-kth-smallest-element-in-a-sorted-matrix
# URL: https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def mergeSort(self, nums):
        if len(nums) == 1:
            return nums

        if len(nums) == 2:
            if nums[0] < nums[1]:
                return nums
            return [nums[1], nums[0]]

        mid = len(nums) // 2

        left = self.mergeSort(nums[:mid])
        right = self.mergeSort(nums[mid:])

        result = []

        while left and right:
            if left[0] < right[0]:
                result.append(left.pop(0))
            else:
                result.append(right.pop(0))

        if left:
            result += left
        if right:
            result += right

        return result

    def sortArray(self, nums: List[int]) -> List[int]:
        return self.mergeSort(nums)


nums = [5, 2, 3, 1]
print(Solution().sortArray(nums))
# Output: [1,2,3,5]

nums = [5, 1, 1, 2, 0, 0]
print(Solution().sortArray(nums))
# Output: [0,0,1,1,2,5]
