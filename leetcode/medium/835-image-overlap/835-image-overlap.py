# 835-image-overlap
# leetcode/medium/835. Image Overlap
# URL: https://leetcode.com/problems/image-overlap/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
import copy
from typing import List


class Solution:
    def countingOverwppaedMatrix(self, matrix1: List[List[int]], matrix2: List[List[int]]) -> int:
        count = 0

        for i in range(len(matrix1)):
            for j in range(len(matrix1[0])):
                if matrix1[i][j] == 1 and matrix2[i][j] == 1:
                    count += 1

        return count

    def shiftToRight(self, matrix: List[List[int]]) -> List[List[int]]:
        for i in range(len(matrix)):
            matrix[i].insert(0, 0)
            matrix[i].pop()

        return matrix

    def shiftToLeft(self, matrix: List[List[int]]) -> List[List[int]]:
        for i in range(len(matrix)):
            matrix[i].append(0)
            matrix[i].pop(0)

        return matrix

    def shiftToTop(self, matrix: List[List[int]]) -> List[List[int]]:
        matrix.append([0] * len(matrix[0]))
        matrix.pop(0)

        return matrix

    def shiftToBottom(self, matrix: List[List[int]]) -> List[List[int]]:
        matrix.insert(0, [0] * len(matrix[0]))
        matrix.pop()

        return matrix

    def calculateLargestOverwrap(self, a: List[List[int]], b: List[List[int]]) -> int:
        max_count = 0
        max_count = max(max_count, self.countingOverwppaedMatrix(a, b))

        for i in range(len(a)):
            a_copy = copy.deepcopy(a)

            for _ in range(i):
                a_copy = self.shiftToBottom(a_copy)

            for j in range(len(a[0])):
                max_count = max(max_count, self.countingOverwppaedMatrix(a_copy, b))
                a_copy = self.shiftToRight(a_copy)

            max_count = max(max_count, self.countingOverwppaedMatrix(a_copy, b))

        for i in range(len(a)):
            a_copy = copy.deepcopy(a)

            for _ in range(i):
                a_copy = self.shiftToBottom(a_copy)

            for j in range(len(a[0])):
                max_count = max(max_count, self.countingOverwppaedMatrix(a_copy, b))
                a_copy = self.shiftToLeft(a_copy)

            max_count = max(max_count, self.countingOverwppaedMatrix(a_copy, b))

        for i in range(len(a)):
            a_copy = copy.deepcopy(a)

            for _ in range(i):
                a_copy = self.shiftToTop(a_copy)

            for j in range(len(a[0])):
                max_count = max(max_count, self.countingOverwppaedMatrix(a_copy, b))
                a_copy = self.shiftToRight(a_copy)

            max_count = max(max_count, self.countingOverwppaedMatrix(a_copy, b))

        for i in range(len(a)):
            a_copy = copy.deepcopy(a)

            for _ in range(i):
                a_copy = self.shiftToTop(a_copy)

            for j in range(len(a[0])):
                max_count = max(max_count, self.countingOverwppaedMatrix(a_copy, b))
                a_copy = self.shiftToLeft(a_copy)

            max_count = max(max_count, self.countingOverwppaedMatrix(a_copy, b))

        return max_count

    def largestOverlap(self, img1: List[List[int]], img2: List[List[int]]) -> int:
        return self.calculateLargestOverwrap(img1, img2)


img1 = [[1, 1, 0], [0, 1, 0], [0, 1, 0]]
img2 = [[0, 0, 0], [0, 1, 1], [0, 0, 1]]
print(Solution().largestOverlap(img1, img2))
# Output: 3

img1 = [[1]]
img2 = [[1]]
print(Solution().largestOverlap(img1, img2))
# Output: 1

img1 = [[0]]
img2 = [[0]]
print(Solution().largestOverlap(img1, img2))
# Output: 0

img1 = [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]
img2 = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0]]
print(Solution().largestOverlap(img1, img2))
# Output: 1
