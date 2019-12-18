"""
https://leetcode.com/problems/gas-station/
Runtime: 52 ms, faster than 91.81% of Python3 online submissions for Gas Station.
Memory Usage: 13.9 MB, less than 68.75% of Python3 online submissions for Gas Station.
"""


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1

        tank = []

        for i in range(len(gas)):
            previous = 0 if i == 0 else tank[i-1]
            tank.append(gas[i] - cost[i] + previous)

        min_index = tank.index(min(tank))
        return 0 if min_index == len(gas)-1 else min_index + 1
