# 77-combinations
# leetcode/medium/77. Combinations
# URL: https://leetcode.com/problems/combinations/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def _combination(self, nums, index, k, result, path):
        if k == 0:
            result.append(path)
            return

        for i in range(index, len(nums)):
            self._combination(nums[:i] + nums[i + 1:], i, k - 1, result, path + [nums[i]])

    def combine(self, n: int, k: int) -> List[List[int]]:
        nums = [i for i in range(1, n + 1)]
        result = []

        self._combination(nums, 0, k, result, [])

        return result


n = 4
k = 2
print(Solution().combine(n, k))
# Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

n = 1
k = 1
print(Solution().combine(n, k))
# Output: [[1]]


n = 4
k = 3
print(Solution().combine(n, k))
# [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]
