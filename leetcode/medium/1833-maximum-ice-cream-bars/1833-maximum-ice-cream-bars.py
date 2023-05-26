# 1833-maximum-ice-cream-bars
# leetcode/medium/1833. Maximum Ice Cream Bars
# URL: https://leetcode.com/problems/maximum-ice-cream-bars/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def maxIceCream(self, costs: List[int], coins: int) -> int:
        count = 0
        costs.sort()

        while costs[0] <= coins:
            coins -= costs.pop(0)
            count += 1
            if len(costs) == 0:
                break

        return count


costs = [1, 3, 2, 4, 1]
coins = 7
print(Solution().maxIceCream(costs, coins))
# Output: 4

costs = [10, 6, 8, 7, 7, 8]
coins = 5
print(Solution().maxIceCream(costs, coins))
# Output: 0

costs = [1, 6, 3, 1, 2, 5]
coins = 20
print(Solution().maxIceCream(costs, coins))
# Output: 6
