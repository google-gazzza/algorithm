# 134-gas-station
# leetcode/medium/134. Gas Station
# URL: https://leetcode.com/problems/gas-station/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1

        index = 0
        total = 0

        for i in range(len(gas)):
            total += gas[i] - cost[i]

            if total < 0:
                index = i + 1
                total = 0

        return index


gas = [1, 2, 3, 4, 5]
cost = [3, 4, 5, 1, 2]
print(Solution().canCompleteCircuit(gas, cost))
# Output: 3

gas = [2, 3, 4]
cost = [3, 4, 3]
print(Solution().canCompleteCircuit(gas, cost))
# Output: -1

gas = [2]
cost = [2]
print(Solution().canCompleteCircuit(gas, cost))
# 0
