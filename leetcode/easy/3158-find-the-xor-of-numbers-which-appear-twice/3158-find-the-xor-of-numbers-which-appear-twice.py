# 3158-find-the-xor-of-numbers-which-appear-twice
# URL: https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/description/
from typing import List


class Solution:
    def duplicateNumbersXOR(self, nums: List[int]) -> int:
        map = {}

        for num in nums:
            map[num] = map.get(num, 0) + 1

        twiceList = []

        for key in map.keys():
            if map[key] == 2:
                twiceList.append(key)

        result = 0

        for num in twiceList:
            result ^= num

        return result
