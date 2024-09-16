# 2535-difference-between-element-sum-and-digit-sum-of-an-array
# leetcode/easy/2535. Difference Between Element Sum and Digit Sum of an Array
# URL: https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        elementSum = sum(nums)
        digitSum = 0

        for num in nums:
            digitSum += sum([int(x) for x in str(num)])

        return abs(elementSum - digitSum)


nums = [1, 15, 6, 3]
print(Solution().differenceOfSum(nums))
# Output: 9

nums = [1, 2, 3, 4]
print(Solution().differenceOfSum(nums))
# Output: 0
