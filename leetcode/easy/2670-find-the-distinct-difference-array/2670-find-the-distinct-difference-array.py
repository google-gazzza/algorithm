# leetcode/easy/2670. Find the Distinct Difference Array
# 2670-find-the-distinct-difference-array
# URL: https://leetcode.com/problems/find-the-distinct-difference-array/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference


from collections import Counter
from typing import List


class Solution:
    def distinctDifferenceArray(self, nums: List[int]) -> List[int]:
        left = dict()
        count = dict(Counter(nums))
        result = []

        for i in range(0, len(nums)):
            if nums[i] not in left:
                left[nums[i]] = 0

            left[nums[i]] += 1
            count[nums[i]] -= 1

            if count[nums[i]] == 0:
                del count[nums[i]]

            result.append(len(left) - len(count))

        return result


nums = [1, 2, 3, 4, 5]
# Output: [-3,-1,1,3,5]
print(Solution().distinctDifferenceArray(nums))

nums = [3, 2, 3, 4, 2]
# Output: [-2,-1,0,2,3]
print(Solution().distinctDifferenceArray(nums))
