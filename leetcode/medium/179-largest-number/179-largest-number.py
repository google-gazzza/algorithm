# 179-largest-number
# leetcode/medium/179. Largest Number
# URL: https://leetcode.com/problems/largest-number/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def largestNumber(self, nums: List[int]) -> str:
        nums_to_str = [str(num) for num in nums]
        nums_to_str.sort(reverse=True)

        result = []

        while len(nums_to_str):
            max_num = nums_to_str[0]
            for num in nums_to_str:
                if num + max_num > max_num + num:
                    max_num = num
            result.append(max_num)
            nums_to_str.remove(max_num)

        return str(int(''.join(result)))


nums = [10, 2]
print(Solution().largestNumber(nums))
# Output: "210"
nums = [3, 30, 34, 5, 9]
print(Solution().largestNumber(nums))
# Output: "9534330"
