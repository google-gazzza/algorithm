# leetcode/easy/806. Number of Lines To Write String
# 806-number-of-lines-to-write-string
# URL: https://leetcode.com/problems/number-of-lines-to-write-string/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:
        alphabets = "abcdefghijklmnopqrstuvwxyz"

        line_count = 1
        total = 0

        for char in s:
            target_index = alphabets.index(char)
            target_width = widths[target_index]

            if char in alphabets and total + target_width <= 100:
                total += target_width
            else:
                total = target_width
                line_count += 1

        return [line_count, total]


widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
          10]
s = "abcdefghijklmnopqrstuvwxyz"
# Output: [3,60]
print(Solution().numberOfLines(widths, s))

widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
s = "bbbcccdddaaa"
# Output: [2,4]
print(Solution().numberOfLines(widths, s))
