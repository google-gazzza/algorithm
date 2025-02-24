# leetcode/medium/781. Rabbits in Forest
# 781-rabbits-in-forest
# URL: https://leetcode.com/problems/rabbits-in-forest/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from collections import Counter
from typing import List


class Solution:
    def numRabbits(self, answers: List[int]) -> int:
        counter = Counter(answers)
        total = 0

        for k, v in counter.items():
            value = v // (k + 1)
            total += (k + 1) * value

            reminder = v % (k + 1)

            if reminder > 0:
                total += (k + 1)

        return total


answers = [1, 1, 2]
print(Solution().numRabbits(answers))
# Output: 5

answers = [10,10,10]
print(Solution().numRabbits(answers))
# Output: 11
