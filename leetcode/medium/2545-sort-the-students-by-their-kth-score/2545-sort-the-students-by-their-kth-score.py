# 2545-sort-the-students-by-their-kth-score
# leetcode/medium/2545. Sort the Students by Their Kth Score
# URL: https://leetcode.com/problems/sort-the-students-by-their-kth-score/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def sortTheStudents(self, score: List[List[int]], k: int) -> List[List[int]]:
        score.sort(key=lambda x: x[k], reverse=True)

        return score


score = [[10, 6, 9, 1], [7, 5, 11, 2], [4, 8, 3, 15]]
k = 2
print(Solution().sortTheStudents(score, k))
# Output: [[7,5,11,2],[10,6,9,1],[4,8,3,15]]

score = [[3, 4], [5, 6]]
k = 0
print(Solution().sortTheStudents(score, k))
# Output: [[5,6],[3,4]]
