# 1861-rotating-the-box
# leetcode/medium/1861. Rotating the Box
# URL: https://leetcode.com/problems/rotating-the-box/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def movingStoneToRight(self, box: List[List[str]]) -> List[List[str]]:
        for i in range(len(box)):
            for j in range(len(box[i]) - 1, -1, -1):
                if box[i][j] == '#':
                    k = j
                    while k + 1 < len(box[i]) and box[i][k + 1] == '.':
                        box[i][k + 1] = '#'
                        box[i][k] = '.'
                        k += 1

        return box

    def rotateArray(self, nums: List[List[int]]) -> List[List[int]]:
        result = [[] for _ in range(len(nums[0]))]

        for i in range(len(nums)):
            for j in range(len(nums[i])):
                result[j].append(nums[len(nums) - 1 - i][j])

        return result

    def rotateTheBox(self, box: List[List[str]]) -> List[List[str]]:
        rotated_box = self.movingStoneToRight(box)
        rotated_box = self.rotateArray(rotated_box)

        return rotated_box


box = [["#", ".", "#"]]
print(Solution().rotateTheBox(box))
# Output: [["."],
#          ["#"],
#          ["#"]]

box = [["#", ".", "*", "."],
       ["#", "#", "*", "."]]
print(Solution().rotateTheBox(box))
# Output: [["#","."],
#          ["#","#"],
#          ["*","*"],
#          [".","."]]

box = [["#", "#", "*", ".", "*", "."],
       ["#", "#", "#", "*", ".", "."],
       ["#", "#", "#", ".", "#", "."]]
print(Solution().rotateTheBox(box))
# Output: [[".","#","#"],
#          [".","#","#"],
#          ["#","#","*"],
#          ["#","*","."],
#          ["#",".","*"],
#          ["#",".","."]]
