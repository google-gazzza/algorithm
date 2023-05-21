# leetcode/medium/2615. Sum of Distances
# 2615-sum-of-distances
# URL: https://leetcode.com/problems/sum-of-distances/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def distance(self, nums: List[int]) -> List[int]:
        index_map = {}
        result_arr = [0] * len(nums)

        for i in range(len(nums)):
            if nums[i] not in index_map:
                index_map[nums[i]] = []

            index_map[nums[i]].append(i)

        # NOTE: we need n log n Algorithm
        for i in index_map:
            if len(index_map[i]) == 1:
                continue

            left_index_sum = 0
            right_index_sum = sum(index_map[i])
            left_count = 0
            right_count = len(index_map[i])

            for j in range(len(index_map[i])):
                target_index = index_map[i][j]
                left_adjust_value = left_count * target_index - left_index_sum
                right_adjust_value = right_index_sum - right_count * target_index

                result_arr[target_index] += left_adjust_value + right_adjust_value
                right_index_sum -= target_index
                right_count -= 1
                left_index_sum += target_index
                left_count += 1

        return result_arr


nums = [1, 3, 1, 1, 2]
# 1
# 3,1,1,2 = 7 = 7-
print(Solution().distance(nums))
# Output: [5,0,3,4,0]

nums = [0, 5, 3]
print(Solution().distance(nums))
# Output: [0,0,0]
