# leetcode/easy/2643. Row With Maximum Ones
# 2643-row-with-maximum-ones
# URL: https://leetcode.com/problems/row-with-maximum-ones/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from collections import Counter
from typing import List


class Solution:
    def rowAndMaximumOnes(self, mat: List[List[int]]) -> List[int]:
        maximum_count = 0
        maximum_index = 0

        for i in range(len(mat)):
            count = Counter(mat[i])

            if maximum_count < count[1]:
                maximum_count = count[1]
                maximum_index = i

        return [maximum_index, maximum_count]


mat = [[0, 1], [1, 0]]
assert Solution().rowAndMaximumOnes(mat) == [0, 1]
# Output: [0,1]

mat = [[0, 0, 0], [0, 1, 1]]
assert Solution().rowAndMaximumOnes(mat) == [1, 2]
# Output: [1,2]

mat = [[0, 0], [1, 1], [0, 0]]
assert Solution().rowAndMaximumOnes(mat) == [1, 2]
# Output: [1,2]
