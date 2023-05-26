# 531-lonely-pixel-i
# leetcode/medium/531. Lonely Pixel I
# URL: https://leetcode.com/problems/lonely-pixel-i/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def findLonelyPixel(self, picture: List[List[str]]) -> int:
        row = [0] * len(picture)
        col = [0] * len(picture[0])

        for i in range(len(picture)):
            for j in range(len(picture[0])):
                if picture[i][j] == 'B':
                    row[i] += 1
                    col[j] += 1

        count = 0

        for i in range(len(picture)):
            for j in range(len(picture[0])):
                if picture[i][j] == 'B' and row[i] == 1 and col[j] == 1:
                    count += 1

        return count


picture = [["W", "W", "B"], ["W", "B", "W"], ["B", "W", "W"]]
print(Solution().findLonelyPixel(picture))
# Output: 3


picture = [["B", "B", "B"], ["B", "B", "W"], ["B", "B", "B"]]
print(Solution().findLonelyPixel(picture))
# Output: 0
