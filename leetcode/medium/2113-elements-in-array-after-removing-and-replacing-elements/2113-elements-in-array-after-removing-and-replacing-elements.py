# leetcode/medium/2113. Elements in Array After Removing and Replacing Elements
# 2113-elements-in-array-after-removing-and-replacing-elements
# URL: https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

from typing import List


class Solution:
    def elementInNums(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        result = []

        for [time, index] in queries:
            targetTime = time % (len(nums) * 2)

            # print(time, index, targetTime)

            if targetTime < len(nums):
                if targetTime + index < len(nums):
                    result.append(nums[targetTime + index])
                else:
                    result.append(-1)
            elif targetTime == len(nums):
                result.append(-1)
            else:
                maxIndex = targetTime - len(nums)

                if index < maxIndex:
                    result.append(nums[index])
                else:
                    result.append(-1)

        return result


nums = [0, 1, 2]
queries = [[0, 2], [2, 0], [3, 2], [5, 0]]

print(Solution().elementInNums(nums, queries))
# assert Solution().elementInNums(nums, queries) == [2, 2, -1, 0]
# Output: [2,2,-1,0]


nums = [2, 2, 1]
queries = [[5, 1], [5, 2]]
print(Solution().elementInNums(nums, queries))
# [2, -1]
# 0   [2, 2, 1]
# 1   [2, 1]
# 2   [1]
# 3   []
# 4   [2]
# 5   [2, 2]
#
# 6   [2, 2, 1]
